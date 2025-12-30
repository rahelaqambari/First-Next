
function page() {
  return (
    <div className='w-full flex items-center justify-center'>
      <h1 className='text-3xl font-bold'> This is the Sighin page</h1>
      <div className='h-screen w-full flex items-center justify-center'>
            <div className='h-[70%] w-6/12 border rounded-2xl flex flex-col justify-center items-center'>
            <h1 className='text-6xl font-bold text-center'>Login</h1>
            <input type="text" placeholder='Enter your Name' className='border outline-0 py-4 px-4 w-10/12 rounded-full m-2 mt-12 hover:shadow-2xl shadow-emerald-900' />
            <input type="text" placeholder='Enter your Email' className='border outline-0 py-4 px-4 w-10/12 rounded-full m-2 hover:shadow-2xl shadow-emerald-900' />
            <input type="text" placeholder='Enter your Password' className='border outline-0 py-4 px-4 w-10/12 rounded-full m-2 hover:shadow-2xl shadow-emerald-900' />
            <button className='py-4 px-6 text-2xl font-bold bg-green-900 text-white rounded-2xl hover:cursor-pointer'>Login</button>
            </div>
            </div>
    </div>
  )
}

export default page
