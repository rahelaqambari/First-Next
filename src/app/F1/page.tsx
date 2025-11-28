import Link from "next/link"
function page() {
  return (
    <div className='h-screen w-full flex flex-col text-4xl items-center justify-center'>
      <h1>This is the folder (1)</h1>
      <Link href="/F1/F2">Go to flder (2)</Link>
      <Link href="/F3">Go to flder (3)</Link>
    </div>
  )
}

export default page
