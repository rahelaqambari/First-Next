import React from 'react'

async function page() {
  await new Promise(resolve =>{
    setTimeout(()=>{
      resolve("awiat amdi");
    }, 6000);
  })
  return (
    <div>
      <h1 className='text-3xl font-bold'> This is the Rajestar page</h1>
    </div>
  )
}

export default page
