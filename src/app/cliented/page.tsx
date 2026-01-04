"use client";
import { useTheme } from '@/Components/theme-provider'
import React, { useState } from 'react'

function page() {
    // const Theme = useTheme();
    // const [dark ,setdark] = useState(Theme.colors.primary);
    // useEffect(()=>{
    //     setdark("#00ff00");
    // },[setdark])
    // function handlecolore(){
    //     setdark("#0000ff");
    //     }
    const Theme = useTheme();
    const [dark ,setdark] = useState(false);
  return (
         <div className="h-screen w-full items-center justify-center flex-col flex" style={dark?
            {
                color:"green", 
              

            }:
            {
                color:"black",
             
              
            }
        }> 
      <h1 className='text-4xl font-bold'>Hi There , Good Evening</h1>
      <button className="bg-green-600 py-4 px-5 rounded-md shadow-2xs shadow-white text-center" onClick={()=>setdark(!dark)}>Toggle theme</button>
    </div>
  )
}

export default page


    
 
