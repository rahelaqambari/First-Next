import Link from 'next/link'
import React from 'react'
function page() {
  return (
    <div>
      <h1 className='text-4xl font-bold '> This is the profile page</h1>
       <Link href="dashboard/private"> Go to private profile</Link>
    </div>
  )
}

export default page
