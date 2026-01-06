import Link from 'next/link';
import React from 'react'

type Client = {
    id: number;
    name: string;
    email: string;
    phone: string;
}

async function page() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userList:Client[] = await response.json();
     return (
    <div className='h-fit w-full grid gap-4 grid-cols-2 items-center justify-center'>
        {userList.map(user=>(
            <div key={user.id} className='bg-stone-300 p-8 flex gap-1 flex-col items-center justify-center'>
                <h1 className=''>{user.name}</h1>
                <Link href={`mailto:${user.email}`}>{user.email}</Link>
                <Link href={`Tell:${user.phone}`}>{user.phone}</Link>
            </div>
        ))}
    </div>
  )
}

export default page
