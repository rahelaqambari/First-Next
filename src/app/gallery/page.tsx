import React from 'react'
import wondersImages from '../lib/photoLib'
import Link from 'next/link'
import Image from 'next/image'

function page() {
  return (
    <div className='w-full mt-6 gap-8 mx-auto grid grid-cols-1 md:grid-cols-4'>
        {wondersImages.map((photo) =>(
            <div key={photo.id}>
            <Link href={`gallery/${photo.id}`}>
            <Image className='h-56 rounded-2xl border-2'
            src={photo.src}
            height={800}
            width={800}
            alt={`${photo.id}`}
            />
            </Link>   
             </div>
        ))}
      
    </div>
  );
}

export default page
