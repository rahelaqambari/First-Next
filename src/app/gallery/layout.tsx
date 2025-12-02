import type{ Metadata } from 'next'
import React from 'react'
import "../globals.css";




 

export const metadata: Metadata = {
  title: {
    default: "Home",
    template:"Rahela Qambari | %s"
  },
  
};
function layout(props: {
  modal: React.ReactNode;
  children: React.ReactNode;
 
}) {
  return (
  <html>
    <body>
    {props.modal}
    {props.children}
    </body>
  </html>    
  )
}

export default layout
