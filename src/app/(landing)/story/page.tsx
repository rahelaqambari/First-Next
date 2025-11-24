

function getrandomnumber(num:number){
    return Math.floor(Math.random() *num)
}

function page() {
    const randomnumber = getrandomnumber(2);
    if(randomnumber <1){
        throw new Error ("Something went wrong");
    }
  return (
    <div className='w-full flex items-center justify-center'>
      <h1  className='text-3xl font-bold'>This is the Story page</h1>
    </div>
  )
}

export default page
