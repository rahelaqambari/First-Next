import React from 'react'
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
async function page({params} : {params : Promise <{postid:string}>}) {
    const postid = (await params).postid;
    if (+postid>1000){
        return notFound();
    }
  return (
    <div className='h-24 w-full flex items-center justify-center'>
      <h1 className=' text-cyan-800 text-3xl'>this is the post {postid}</h1>
    </div>
  )
}

export default page
