import { Params } from 'next/dist/server/request/params'
import React from 'react'

async function page({params}: {params: Promise <{studentdetails :string}>}) {
  const studentdetails  = (await params).studentdetails;
  return (
    <div>
      <h1>the details about student number {studentdetails}</h1>
    </div>
  )
}

export default page
