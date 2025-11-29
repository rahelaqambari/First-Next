import Link from "next/link"
function page() {
  return (
    <div className='h-screen w-full flex items-center justify-center flex-col'>
      <h1 className='text-4xl border-4 rounded-full border-dashed p-24'>This is the folder 2(intercepting)</h1>
      <Link href="/F4"> Go to Folder 4</Link>
    </div>
  )
}

export default page
