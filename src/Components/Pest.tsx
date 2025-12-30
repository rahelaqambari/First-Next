import { resolve } from 'path'
import React from 'react'

async function Pest() {
    await new Promise(resolve=> setTimeout(resolve, 5000));
  return (
    <div className='p-12 bg-cyan-900 text-white rounded-md text-4xl'>
        <h1>This is the pest part</h1>
      
    </div>
  )
}

export default Pest
