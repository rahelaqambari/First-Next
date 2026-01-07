import Link from 'next/link';
type Client = {
    id: number;
    name: string;
    email: string;
    phone: string;
}

async function page() {
    await new Promise((resolve)=> setTimeout(resolve,1000));
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userList:Client[] = await response.json();
     return (
    <div className='h-fit w-full grid gap-4 grid-cols-2 items-center justify-center'>
        {userList.map(user=>(
            <div key={user.id} className='bg-stone-300 p-8 flex gap-1 flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold text-amber-800'>{user.name}</h1>
                <Link className='text-gray-100' href={`mailto:${user.email}`}>{user.email}</Link>
                <Link className='text-gray-100' href={`Tell:${user.phone}`}>{user.phone}</Link>
            </div>
        ))}
    </div>
  )
}

export default page
