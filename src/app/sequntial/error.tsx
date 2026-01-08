"use client";
function error() {
  return (
    <div className='h-80 w-full flex flex-col items-center justify-center'>
            <h1 className='text-8xl animate-bounce'>❌</h1>
            <h1 className='text-4xl text-red-600'>Something Went Wrong !</h1>
    </div>
  )
}

export default error
