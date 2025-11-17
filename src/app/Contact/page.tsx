import { Metadata } from 'next'
import React from 'react'
export const metadata :Metadata = {
  title: "contact",
  description: "About part",
 }

function page() {
  return (
   <div className='h-screen w-full flex items-center justify-center'>
      <div className='h-56 w-[40%] border rotate-12 rounded-4xl rounded-bl-none rounded-tr-none shadow-2xl text-3xl items-center justify-center flex'>
        <h1 className='text-blue-400'>Contact page</h1>
      </div>
      
    </div>
  )
}

export default page
