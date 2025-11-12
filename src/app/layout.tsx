import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Next js App",
  description: "Studing next js"
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
