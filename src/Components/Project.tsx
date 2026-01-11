import React from 'react'

function Project() {
  return (
    <div className='flex flex-col items-center justify-center gap-2 bg-linear-30 from-white/30 to-blue-800'>
        <h1 className='text-4xl font-black text-white p-12'>Projects</h1>
        <div className='w-full flex items-center justify-center gap-6'>
            <div className='h-fit w-4/12 border rounded-md border-white flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold text-white p-12'>Dantal Clinic</h1>
            <h1 className='text-9xl p-4 '>🦷🪥💉💊</h1>
      </div>
      <div className='h-fit w-4/12 border rounded-md border-white flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold text-white p-12'>Flower Web</h1>
            <h1 className='text-9xl p-4 '>💐🌼🌹🌷</h1>
      </div>
      <div className='h-fit w-4/12 border rounded-md border-white flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold text-white p-12'>Bakary, Cookies</h1>
            <h1 className='text-9xl p-4 '>🥯🧁🍰🍪</h1>
      </div>
      {/* <div className='h-fit w-4/12 border rounded-md border-white flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold text-white p-12'>Bakary, Cookies</h1>
            <h1 className='text-9xl' p-4 > 🍔🌯🍕🥤</h1>
      </div> */}
        </div>
    </div>
  )
}

export default Project
