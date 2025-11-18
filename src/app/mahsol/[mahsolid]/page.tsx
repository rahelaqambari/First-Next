import React from 'react'

async function page({params, searchParams}:{params: Promise<{mahsolid: string}>;searchParams: Promise<{lang? :string}>}) {
    const {mahsolid} = await params;
    const {lang = "en"} = await searchParams
    if(lang === "en"){
        return(
            <div className='flex flex-col items-center justify-center gap-5'>
                <h1 className='text-9xl mt-4'>💻</h1>
                <h1 className='text-3xl text-amber-600 font-bold'>This is the Product with id {mahsolid}</h1>
                <p className='w-[50%] text-base text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi optio minus pariatur corrupti eum accusantium, nesciunt voluptas blanditiis minima molestiae commodi illum sint earum nihil officiis placeat et sequi numquam.</p>
            </div>
        )
    }else{
        return(
             <div className='flex flex-col items-center justify-center gap-5'>
                <h1 className='text-9xl mt-4'>💻</h1>
                <h1 className='text-3xl text-amber-600 font-bold'>شما در حال خواندن محصول با ایدی شماره {mahsolid} هستید</h1>
                <p className='w-[50%] text-base text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus vero cum inventore, ad perspiciatis officia ullam eos esse iste! In dicta dolores, magnam saepe modi tempore delectus odio error?</p>
            </div>
        )
    }
}

export default page
