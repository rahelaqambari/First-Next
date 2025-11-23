"use client";
import React, { useState } from 'react'

function Input() {
    const [value,setvalue] = useState("");
  return (
    <div className='h-56 w-full flex items-center justify-center '>
      <input type="text" className='text-2xl py-3 px-6 outline-0 border border-black rounded-2xl' />
    </div>
  )
}

export default Input
