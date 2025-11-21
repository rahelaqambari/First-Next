"use client";
import React from 'react'
import { redirect, useRouter } from 'next/navigation';
function Button() {
    const router = useRouter();
    function handleClick(){
        console.log ("success");
        router.back();
    }
  return (
    <div>
      <button className='py-2 px-4 text-2xl font-bold rounded-lg text-white bg-blue-400' onClick={handleClick}>Order Now</button>
    </div>
  )
}

export default Button
