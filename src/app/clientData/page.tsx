"use client";
import { useEffect, useState } from 'react';
type user = {
    id: number;
    name: string;
    email: string;
    website: string;
}

async function page() {
    const [list,setlist] = useState<user[]>([])
    const [loading,setloading] = useState(true);
    useEffect(()=>{
        async function fetchData(){
            try{ 
               const Response = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!Response.ok)throw new Error("Something Went Wrong");
                  const data =  await Response.json();
                setlist(data);
            }
            catch(err){
                console.log("Something went wrong !")
            }
            finally{
                setloading(false);
            }
        }
        fetchData();
    },[]);
    return (loading ? <h1 className='p-32 mx-auto w-full  text-6xl text-green-700 font-bold '>loading...</h1>:
        <div className='w-10/12 mx-auto flex flex-col'>
            {list.map((user ,index)=> (
                <div key={index} className='border p-12 flex flex-ol items-center justify-center'>
                    <h1 className='text-3xl text-green-700'>{user.id}</h1>
                    <h1>{user.name}</h1>
                    <h1>{user.email}</h1>
                    <h1>{user.website}</h1>
                </div>
            ))}
        </div>
    )
}

export default page
