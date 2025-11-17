import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='h-56 w-[40%] border rounded-4xl rounded-bl-none rounded-tr-none shadow-2xl text-3xl items-center justify-center flex flex-col'>
        <h1 className='text-blue-400'>Articales page</h1>
        <Link href="/articles/1">Article 1</Link>
        <Link href="/articles/2">Article 2</Link>
        <Link href="/articles/3">Article 3</Link>
        <Link href="/articles/4">Article 4</Link>
        <Link href="/articles/5" replace>Article 5</Link>
      </div>
    </div>
  )
}

export default page
