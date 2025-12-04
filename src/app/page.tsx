import Image from "next/image";

export default function Home() {
  return (
   <div className='h-screen w-full flex items-center justify-center'>
      <div className='h-40 w-[80%] border-2 border-blue-400 flex-col  rounded-4xl rounded-bl-none rounded-tr-none hover:shadow-2xl hover:shadow-blue-700 shadow-blue-400  items-center justify-center flex'>
        <h1 className='bg-linear-to-r from-cyan-800 to-red-900 via-indigo-700 bg-clip-text text-transparent text-6xl font-bold'><span className="text-2xl text-black font-medium mb-32">const <span className="text-2xl text-indigo-700 font-medium mb-32 ">name</span> = </span> "Rahela Meysam"</h1>
        <h4 className="text-base font-bold"><span className="text-indigo-800 font-bold text-base ">console.log(</span>"Hey, dear Rahela"<span className="text-indigo-700 font-bold text-base ">);</span></h4>
      </div>
      
    </div>
  );
}

