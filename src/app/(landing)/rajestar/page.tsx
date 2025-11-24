import React from 'react'

async function page() {
  await new Promise(resolve =>{
    setTimeout(()=>{
      resolve("awiat amdi");
    }, 3000);
  })
  return (
    <div className='w-full flex items-center justify-center'>
      <h1 className='text-3xl font-bold'> This is the Rajestar page</h1>
    </div>
  )
}

export default page
