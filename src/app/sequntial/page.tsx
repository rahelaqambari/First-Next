import Author from "@/Components/Author";
import { Suspense } from "react";

type Post = {
    userId: number,
    id: number,
    tittle: string,
    body: string
}
export default async function page(){
    const response =  await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts:Post[] = await response.json();
    const filterpost = posts.filter(post =>post.id % 10 ===1);
    return(<div className="w-full grid grid-cols-2 gap-3">
        {filterpost.map((post)=> (
            <div className="bg-stone-300 flex flex-col p-6 ">
                <h1 className="text-4xl font-bold">{post.tittle}</h1>
                <p className="text-base">{post.body}</p>
                <Suspense fallback={<div className="border border-b-0 h-12 w-12 rounded-full animate-spin"></div>}>
                     <Author userid={post.userId} />
                </Suspense>
               
            </div>
        ))}
    </div>)
}