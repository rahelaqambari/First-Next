import Image from "next/image";

export default function Home() {
  return (
   <div className='h-screen w-full flex items-center justify-center'>
      <div className='h-56 w-[40%] border rotate-12 rounded-4xl rounded-bl-none rounded-tr-none shadow-blue-400 text-shadow-2xs text-shadow-black text-3xl items-center justify-center flex'>
        <h1 className='text-blue-400 text-4xl'>Home page</h1>
      </div>
      
    </div>
  );
}
