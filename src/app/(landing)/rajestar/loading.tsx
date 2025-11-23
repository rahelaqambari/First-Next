import React from 'react'

function Loading() {   
  return (
    <div className='h-72 w-full flex flex-col items-center justify-center'>
      <div className="h-10 w-10 border-2 border-t-0 border-l-0 rounded-full animate-spin"></div>
      <h1 className='text-2xl '>Loading...</h1>
    </div>
  )
}

export default Loading
