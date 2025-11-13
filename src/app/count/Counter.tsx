"use client"; 
 import React, { useState } from 'react'

function Counter() {
    const [value ,setvalue] = useState (0);
  return (
    <div style={{
        backgroundColor : "blue",
        width: "50%",
        height: "40%",
        borderRadius: "8px",
        alignItems: "center",
        color: "white"
    }}>
      <h1>The number is  {value}</h1>
      <button onClick={() => setvalue(value +1)}>incermant</button>
      <button onClick={() => setvalue(value -1)}>decremant</button>
    </div>
  );
}

export default Counter
