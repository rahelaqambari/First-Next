import Link from 'next/link'
import React from 'react'
function page() {
  return (
    <div>
      <h1 className='text-4xl font-bold p-6 '> This is the profile page</h1>
       <Link className='bg-amber-600 rounded-2xl py-2 px-4 text-2xl text-white' href="dashboard/private"> Go to private profile</Link>
    </div>
  )
}

export default page
