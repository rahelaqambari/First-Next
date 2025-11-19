"use client";
import React from 'react'
import { redirect, useRouter } from 'next/navigation';
function Button() {
    const router = useRouter();
    function handleClick(){
        console.log ("success");
        redirect("/?message= yor order placed");
    }
  return (
    <div>
      <button className='py-2 px-4 text-white bg-blue-400' onClick={handleClick}>Order Now</button>
    </div>
  )
}

export default Button
