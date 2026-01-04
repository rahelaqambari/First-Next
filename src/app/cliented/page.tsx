"use client";
import { useTheme } from '@/Components/theme-provider'
import React, { useEffect, useState } from 'react'

function page() {
    const Theme = useTheme();
    const [dark ,setdark] = useState(false);
    function handelcolore(){
        Theme.colors.primary = "#00ff00";
    }
  return (
         <div className="h-10/12 mt-32 w-full items-center justify-center flex-col flex"> 
      <h1>Hi There , Good Evening</h1>
      <button className="bg-green-600 py-4 px-5 rounded-md shadow-2xs shadow-white text-center" onClick={()=>handelcolore(setdark!)}>Toggle theme</button>
    </div>
  )
}

export default page
