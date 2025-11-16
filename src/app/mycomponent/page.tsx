import React from 'react'
import Nav from './Nav'
import { Metadata } from 'next'

export const metadata : Metadata = {
    title: "home"
}
function mycomponent() {
  return (
    <div>
        <h1>
            this is the home page
        </h1>
        <Nav />
    </div>
  )
}

export default mycomponent
