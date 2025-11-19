import React from 'react'
import Button from './Button';

async function page({params}: {params: Promise<{orderid:string}>}) {
  const orderid = (await params).orderid;





  return (
    <div>
      <h1>You are the item {orderid} </h1>
      <Button />
    </div>
  )
}

export default page
