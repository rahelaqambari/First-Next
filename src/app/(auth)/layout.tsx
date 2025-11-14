import React from 'react'

function layout({childern}: {children : React .ReactNode}) {
  return (
    <html>
        <body>
            <nav style={{
            padding:' 6px',
            backgroundColor: 'cyan',
            color:"white",
        }}>header</nav>
        {childern}
        <footer style={{
            padding:' 6px',
            backgroundColor: 'cyan',
            color:"white",
        }}>Footer</footer>
        </body>
    </html>
  )
}

export default layout
