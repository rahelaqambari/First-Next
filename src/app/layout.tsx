import type{ Metadata } from 'next'
import React from 'react'
import "./globals.css";
import Navbar from './Navbar';

export const metadata: Metadata = {
  title: {
    default: "Home",
    template:"Rahela Qambari | %s"
  },
  
};
function layout({children}: Readonly<{
  children: React.ReactNode;
 
}>) {
  return (
    <div>
  <html>
    <body>
      <Navbar />
    {children}
    </body>
  </html> 
  </div>   
  )
}

export default layout
