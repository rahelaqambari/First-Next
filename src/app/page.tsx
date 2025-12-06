import Image from "next/image";

export default function Home() {
  return (
   <div className='h-fit gap-12 mt-32 w-full flex flex-col items-center justify-center'>
    <div className="h-72 w-[60%] border rounded-4xl gap-4 bg-black/50 rounded-bl-none rounded-tr-none shadow-2xl text-3xl items-center justify-center flex flex-col">
      <h1 className="text-5xl font-serif font-bold">About Me</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, itaque a assumenda tempora neque eaque unde obcaecati? Eaque earum deserunt nulla pariatur, velit dignissimos provident, numquam itaque sit nihil iste.</p>
       <p className="w-[70%] text-base text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quidem doloribus illum odio unde, vel deleniti consectetur ipsum error, laboriosam ut aspernatur voluptas quos voluptate dignissimos.</p>
    </div>
      {/* <div className='h-40 w-[80%] border-2 border-blue-400 flex-col  rounded-4xl rounded-bl-none rounded-tr-none hover:shadow-2xl hover:shadow-blue-700 shadow-blue-400  items-center justify-center flex'>
        <h1 className='bg-linear-to-r from-cyan-800 to-red-900 via-indigo-700 bg-clip-text text-transparent text-6xl font-bold'><span className="text-2xl text-black font-medium mb-32">const <span className="text-2xl text-indigo-700 font-medium mb-32 ">name</span> = </span> "Rahela Meysam"</h1>
        <h4 className="text-base font-bold"><span className="text-indigo-800 font-bold text-base ">console.log(</span>"Hey, dear Rahela"<span className="text-indigo-700 font-bold text-base ">);</span></h4>
      </div> */}
      
    </div>
  );
}

