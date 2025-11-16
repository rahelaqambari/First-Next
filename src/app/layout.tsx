import type{ Metadata } from 'next'
import { type } from 'os';
import React from 'react'
// import "../globals.css";

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
      <nav style={{
        backgroundColor:"green",
        padding : "12px",
        alignItems: "center",
      }}>
        <h1 style={{
          
          color: "white"
        }}>Header</h1>
      </nav>
      {children}
      <footer style={{
        backgroundColor:"green",
        padding : "12px",
      }}>
        <h1 style={{
          
          color: "white"
        }}>Footer</h1>
      </footer>
    </body>
  </html>    
  )
}

export default layout
