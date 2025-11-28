import Link from "next/link"
function page() {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <h1 className='text-4xl border-2 border-dashed p-40'>This is the folder 2(intercepting)</h1>
      <Link href="/F4"> Go to Folder 4</Link>
    </div>
  )
}

export default page
