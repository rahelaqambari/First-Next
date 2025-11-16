import { Metadata } from 'next'
import React from 'react'
export const metadata : Metadata = {
    title: "home"

}

function Page() {
  return (
      <div className='flex justify-center items-center h-screen w-full '>
       <div className="h-20 w-fit flex  ">
           <div className="h-full w-96 text-center rounded-lg bg-green-500 flex items-center justify-center">
                    <h1 className="text-white text-3xl ">Welcom to the home page</h1>
                </div>
                <div className="h-20 w-24">
                    <div className="h-20 w-20 rounded-full border-b-4 border-green-500 flex justify-center gap-6">
                         <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>

                    </div>
                </div>
               
            </div>
    </div>
  )
}

export default Page