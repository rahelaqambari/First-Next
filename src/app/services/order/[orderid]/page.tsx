import React from 'react'
import Button from './Button';

async function page({params}: {params: Promise<{orderid:string}>}) {
  const orderid = (await params).orderid;





  return (
    <div className='w-full felx flex-col items-center justify-center'>
      <h1 className='text-2xl'>You are looking the items whith id {orderid} </h1>
      <Button />
    </div>
  )
}

export default page
