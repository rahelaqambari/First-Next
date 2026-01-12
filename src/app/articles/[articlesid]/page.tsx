import React from 'react'

async function page({params}:{params: Promise<{articlesid: string}>}) {
    const articlesid = (await params).articlesid
  return (
    <div className='flex items-center justify-center w-full'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nihil itaque accusantium nemo amet consectetur iste molestias. Ad quidem repellat animi aliquid nam deleniti, nesciunt quae, vel, distinctio quibusdam voluptatum?</p>
     <h1 className='text-4xl font-bold p-4'> It is the Article <span className='text-5xl font-bold text-green-800 pt-12 animate-pulse'>{articlesid}</span></h1>
    </div>
  )
}

export default page
