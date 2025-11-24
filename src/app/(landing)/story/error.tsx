"use client";
import { startTransition } from "react";
import { useRouter } from "next/navigation";
import React from 'react'

function error({error,reset}:{error:Error,reset: ()=>void}){
  const router = useRouter();
  function handleclick(){
    router.refresh();
    startTransition(()=> {
      reset();
    })
  }
  return (
    <div className="h-72 w-full items-center justify-center flex">
      <div className="h-56 w-[40%] border rounded-4xl rounded-bl-none rounded-tr-none shadow-2xl text-3xl items-center justify-center flex flex-col gap-2">
        <h1 className="text-7xl">🤪</h1>
        <h1 className="text-3xl font-bold">Don't Be Worry</h1>
        <p className="text-base font-bold text-center ">Nothing spicail happen just click on botton!</p>
        <button className="bg-amber-300 py-2 px-4 rounded-md text-white" 
      onClick={()=> handleclick()}
      >Try Agine</button>
      </div>
      
    </div>
  )
}

export default error
