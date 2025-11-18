const fruits = Array.from({ length: 40},(_,index) =>({
   id: index + 1,
   name: `fruit ${index+ 1}`, 
}));

async function page( {searchParams}:{searchParams: Promise<{page?: string}>}) {
    const pageInstring = (await searchParams).page;
    const pagenumber = Number(pageInstring) || 1;
    const itemsperpage = 5;
    const start = (pagenumber-1) * itemsperpage;
    const end = start+ itemsperpage;
    const items = fruits.slice(start, end);
  return (
    <div>
      {items.map((fruits)=>(
        <h1 key={fruits.id} className="text-5xl text-fuchsia-600">{fruits.name}</h1>
      ))}
    </div>
  )
}

export default page
