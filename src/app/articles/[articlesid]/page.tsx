import React from 'react'

async function page({params}:{params: Promise<{articlesid: string}>}) {
    const articlesid = (await params).articlesid
  return (
    <div className='flex items-center justify-center w-full'>
     <h1 className='text-4xl font-bold p-4'> It is the Article <span className='text-5xl font-bold text-green-800 pt-12 animate-pulse'>{articlesid}</span></h1>
    </div>
  )
}

export default page
