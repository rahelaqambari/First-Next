import type{ Metadata } from 'next'

import React from 'react'
import "./globals.css";




 

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
  <html>
    <body>
    {children}
    </body>
  </html>    
  )
}

export default layout
