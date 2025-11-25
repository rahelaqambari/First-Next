import type{ Metadata } from 'next'
import { type } from 'os';
import React from 'react'
import "../globals.css";
import Link from 'next/link';
import Navbar from '../Navbar';



 

export const metadata: Metadata = {
  title: {
    default: "Home",
    template:"Rahela Qambari | %s"
  },
  
};
function layout({children,finance,profile,notification}: Readonly<{
  children: React.ReactNode;
  finance: React.ReactNode;
  profile: React.ReactNode;
  notification: React.ReactNode
}>) {
  return (
  <html>
    <body>
     <Navbar />
    {children}
    <div className='flex justify-between'>
      <div className='p-4 shadow-2xl border'>{profile}</div>
      <div className='p-4 shadow-2xl border'>{finance}</div>
      <div className='p-4 shadow-2xl border'>{notification}</div>
    </div>
    </body>
  </html>    
  )
}

export default layout
