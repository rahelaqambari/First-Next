"use client"; 
 import React, { useState } from 'react'

function Counter() {
    const [value ,setvalue] = useState (0);
  return (
    <div className='h-[50vh] w-[60%] rounded-md border-2 mx-auto my-20 flex flex-col justify-center items-center'>
      <h1 className='text-5xl'>The number is <span className='text-5xl font-bold text-cyan-800'>{value}</span></h1>
      <div className='flex justify-between w-[50%] mt-8'>
        <button className='bg-amber-800 text-2xl text-white py-3 rounded-md px-2' onClick={() => setvalue(value +1)}>incermant</button>
      <button className='bg-cyan-800 text-2xl text-white py-3 rounded-md px-2' onClick={() => setvalue(value -1)}>decremant</button>
      </div>
    </div>
  );
}

export default Counter
