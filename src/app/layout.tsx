import type{ Metadata } from 'next'
import { createContext } from 'react';
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
  <html>
    <body>
    <Navbar />
    {children}
    </body>
  </html>    
  )
}

export default layout
