import React from 'react'

async function page({params} :{params : Promise<{slug :string}>}) {
    if((await params).slug.length===2){
  return (
    <div className='h-44 w-full flex items-center justify-center'>
      <h1 className='text-2xl'>This is the feature <span className='text-2xl font-bold'>{(await params).slug[0]}</span> and the concept <span className='text-2xl font-bold'>{(await params).slug[1]}</span></h1>
    </div>
  )}
  else if((await params).slug.length===1){
    return(
        <div>
            <h1>this is the feature {(await params).slug[0]}</h1>
        </div>
    )
  }
  return(
    <div className='h-32 w-full text-white flex items-center justify-center font-bold bg-black'>
        <h1 className='text-2xl'>This will Manage All the Routes</h1>
    </div>
  )
}

export default page
