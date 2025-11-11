import React from 'react'

function notFound() {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <div className='h-[40%] w-[45%] bg-cyan-800 rounded flex items-center flex-col justify-center'>
            <h1 className='text-white text-5xl font-bold animate-bounce '> 404</h1>
            <h1 className='text-white text-3xl font-bold'>This page is not found !</h1>
        </div>
    </div>
  )
}

export default notFound