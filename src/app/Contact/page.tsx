import Load from '@/Components/Load'
import Pest from '@/Components/Pest'
import Review from '@/Components/Review'
import { Metadata } from 'next'
import React, { Suspense } from 'react'
export const metadata :Metadata = {
  title: "contact",
  description: "About part",
 }

function page() {
  return (
   <div className='h-screen w-full flex flex-col items-center justify-center'>
    <h1 className='text-green-700 font-bold p-12 text-6xl'>Contact page</h1>
      <div className='text-3xl gap-6 items-center justify-center flex p-24'>
      <Suspense fallback={ <Load />}>
        <Pest/>
      </Suspense>
      <Suspense fallback={<h5>Loading...</h5>}>
        <Review/>
      </Suspense>
      </div>
      
    </div>
  )
}

export default page
