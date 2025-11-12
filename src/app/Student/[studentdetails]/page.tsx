import { Params } from 'next/dist/server/request/params'
import React from 'react'
import { Metadata } from 'next'

type Props = {
  params: Promise <{studentdetails:string ,reviews: string}>
}
export const generateMatadata = async ({params}: Props):Promise<Metadata>=>{
  const {studentdetails,reviews} = await params;
  return{
    title: `Student ${studentdetails} visited ${reviews} time`
  };
};
async function page({params}: {params: Promise <{studentdetails :string}>}) {
  const studentdetails  = (await params).studentdetails;
  return (
    <div>
      <h1>the details about student number {studentdetails}</h1>
    </div>
  )
}

export default page
