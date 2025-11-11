import React from 'react'

function page() {
  return (
    <div className='h-screen w-full items-center justify-center flex flex-col'>
      <div className=' w-96 flex gap-10 justify-center font-bold text-2xl'>
        <h1>ID</h1>
        <h1>Name</h1>
        <h1>Photo</h1>
      </div>
      <div className='flex gap-16 justify-center font-bold text-2xl'>
        <a href="Student/1">
        <h1>1</h1>
        </a>
        <h1>Reza</h1>
        <h1>👨🏾‍🎓</h1>
      </div>
       <div className='flex gap-16 justify-center font-bold text-2xl'>
        <a href="Student/2">
        <h1>2</h1>
        </a>
        <h1>Sana</h1>
        <h1>🧖🏾‍♀️</h1>
      </div>
       <div className='flex gap-20 justify-center font-bold text-2xl'>
        <a href="Student/3">
        <h1>3</h1>
        </a>
        <h1>Ali</h1>
        <h1>👨🏾‍💻</h1>
      </div>
       <div className='flex gap-16 justify-center font-bold text-2xl'>
        <a href="Student/4">
        <h1>4</h1>
        </a>
        <h1>Hana</h1>
        <h1>👩🏾‍💻</h1>
      </div>
    </div>
  )
}

export default page
