import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='h-[90vh] w-full flex items-center justify-center bg-linear-30 from-blue-900 to-stone-50'>
      <div className='w-[50%] gap-5 flex flex-col items-center justify-center'>
        <h1 className='text-3xl text-white font-bold'>Hi I am Rahela a Full-Stack Devoloper</h1>
        <p className='text-base w-[80%] text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, non similique! Sequi nulla autem iusto culpa! Recusandae fugit repellendus fuga perferendis enim unde accusantium, eligendi consequatur, ipsum dolore alias magni!</p>
      </div>
      <div className='w-[50%] flex justify-between items-center'>
        <div className='h-[68vh] ml-32 rounded-full outline-8 outline-blue-900 w-[40%] border-blue-900 mt-12 border-8 hover:shadow-2xl shadow-blue-700'>
        </div>
       <div className='flex flex-col h-fit gap-8 mt-12'>
        <div className='h-16 w-20 bg-blue-900'></div>
        <div className='h-16 w-20 bg-blue-900'></div>
        <div className='h-16 w-20 bg-blue-900'></div>
        <div className='h-16 w-20 bg-blue-900'></div>
        <div className='h-16 w-20 bg-blue-900'></div>
        <div className='h-16 w-20 bg-blue-900'></div>
       </div>
      </div>
    </div>
  )
}

export default page
