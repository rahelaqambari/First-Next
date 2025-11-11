import React from 'react'

function layout({children}:{children: React.ReactNode}) {
  return (
  <html>
    <body>
      <nav className=' w-full h- fit p-4 bg-green-800 flex items-center justify-center'>
        <h1 className='text-3xl font-bold text-white'>Header</h1>
      </nav>
      {children}
      <footer className=' w-full h- fit p-4 bg-green-800 flex items-center justify-center'>
        <h1 className='text-3xl font-bold text-white'>Footer</h1>
      </footer>
    </body>
  </html>    
  )
}

export default layout
