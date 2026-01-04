import { serverfunction } from '@/utils/utlis'
import React from 'react'

function page() {
  const message =  serverfunction();
  return (
    <div>
      <h1 className='text-5 text-red-500'>Server component {message}</h1>
    </div>
  )
}

export default page
