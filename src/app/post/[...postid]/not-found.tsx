"use client"; 
 import React from 'react'
 import { usePathname } from 'next/navigation';

function notfound() {
    const path = usePathname ();
    const postid = path.split('/')[2];
    postid
  return (
    <div className='w-full text-center text-2xl'>We don't have a post with  id <span className='text-2xl font-bold'>{postid}  </span>
    </div>
  )
}

export default notfound
