import React from 'react'

async function page({params}:{params: Promise<{articlesid: string}>}) {
    const articlesid = (await params).articlesid
  return (
    <div>
      article number {articlesid}
    </div>
  )
}

export default page
