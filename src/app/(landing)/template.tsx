import Link from 'next/link'
import React from 'react'
import Input from './Input'

function layout({children}:{children: React.ReactNode}) {
  return (
    <div>
        <nav className='bg-fuchsia-800 text-white py-6 flex justify-around gap-2 text-3xl items-center'>
            <Link href="/rajestar">Rejester</Link>
            <Link href="/sighup">Sigh Up</Link>
            <Link href="/sighin">Sigh In</Link>
        </nav>
        <Input />
        
        {children}
    </div>
  )
}

export default layout
