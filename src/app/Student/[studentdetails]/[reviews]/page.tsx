import React from 'react'

async function page({params}:{params: Promise <{studentdetails: string; reviews: string}>}) {
    const {studentdetails ,reviews} = await params;
  return (
    <div className='flex items-center justify-center'>
      <h1 className='text-3xl w-[90vh] text-amber-700 '>This is the details about student with id {studentdetails} and you have visite is for {reviews} times</h1>
    </div>
  )
}

export default page
