"use client"; 
 import React, { useState } from 'react'

function page() {
    const [value ,setvalue] = useState (0);
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setvalue(value +1)}>incermant</button>
      <button onClick={() => setvalue(value -1)}>decremant</button>
    </div>
  )
}

export default page
