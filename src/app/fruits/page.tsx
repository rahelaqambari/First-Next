import Link from "next/link";

const fruits = Array.from({ length: 60},(_,index) =>({
   id: index + 1,
   name: `Fruit ${index+ 1}`, 
}));

async function page( {searchParams}:{searchParams: Promise<{page?: string}>}) {
    const pageInstring = (await searchParams).page;
    const pagenumber = Number(pageInstring) || 1;
    const itemsperpage = 8;
    const start = (pagenumber-1) * itemsperpage;
    const end = start+ itemsperpage;

    const items = fruits.slice(start, end);
    const totalpage = Math.ceil(fruits.length / itemsperpage);
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-3 items-center ml-16 justify-around mt-2.5 ">
      {items.map((fruits)=>(
        <div key={fruits.id} className="w-52 h-48 flex justify-center items-center bg-amber-700 rounded-2xl">
        <h1 key={fruits.id} className="text-5xl text-white">{fruits.name}</h1>
       </div>
      ))}
       </div>
      <Pagenation currentpage = {pagenumber} totalpage={totalpage} />
    </div>
  )
}

export default page

function Pagenation({currentpage, totalpage}:{currentpage:number,totalpage:number}){
  const listpagenumber = Array.from({length: totalpage}, (_,i)=>i+1);
  return(
    <div className="w-full flex items-center justify-center flex-col pt-6">
      <h1 className="text-3xl">Page <span className="text-amber-600 font-bold">{currentpage}</span> of <span className="text-amber-600 font-bold">{totalpage}</span></h1>
      <div className="flex items-center justify-center">
       <button className="bg-amber-700 py-3 rounded-l-xl px-3 text-2xl text-white">
         {currentpage>1 &&
        (<Link href={`?page=${currentpage-1}`}>Prev</Link>)}
       </button>
        <h1 className="text-3xl flex justify-between gap-5 py-2 border border-l-0 border-r-0 border-amber-700 hover:text-amber-700 " >
          {listpagenumber.map(page=>
          (<Link key={page} href={`?page=${page}`}>{page}</Link>))}
        </h1>
        <button className="bg-amber-700 py-3 rounded-r-xl px-3 text-2xl text-white">
            {currentpage < totalpage && 
        (<Link href={`?page=${currentpage + 1}`}>Next</Link>)}
        </button>
      </div>
    </div>
  )

}
