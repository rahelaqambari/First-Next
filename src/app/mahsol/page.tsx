import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <div className='h-[40%] w-[45%] bg-amber-600 rounded flex items-center flex-col justify-center gap-4'>
            <h1 className='text-white text-5xl font-bold'> All Product</h1>
            <h1 className='text-2xl text-white font-bold'> In wich langueg you want to read it ?</h1>
            <Link className='text-white font-bold hover:text-amber-200 hover:underline' href="/mahsol/1?lang=en">English</Link>
            <Link className='text-white font-bold hover:text-amber-200 hover:underline' href="/mahsol/1?lang=fa">Persion</Link>
        </div>
        </div>
  )
}

export default page
