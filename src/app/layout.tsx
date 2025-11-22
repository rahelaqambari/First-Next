import type{ Metadata } from 'next'
import { type } from 'os';
import React from 'react'
import "./globals.css";
import Link from 'next/link';
// import Navbar from './Navbar';



 

export const metadata: Metadata = {
  title: {
    default: "Home",
    template:"Rahela Qambari | %s"
  },
  
};
function layout({children}:{children: React.ReactNode}) {
  return (
  <html>
    <body>
     {/* <Navbar /> */}
    {children}
    </body>
  </html>    
  )
}

export default layout
