import { resolve } from 'path'
import React from 'react'

async function Review() {
    await new Promise(resolve=> setTimeout(resolve, 3000));
  return (
    <div className='p-12 bg-blue-500 text-white rounded-md text-4xl'>
        <h1>This is the review page</h1>
      
    </div>
  )
}

export default Review
