import Author from "@/Components/Author";
import { Suspense } from "react";

type Post = {
    id: number,
    tittle: string,
    body: string
};
type album = {
     id: number,
    tittle: string
};
async function getposts(id:string):Promise<Post[]>{
     const response =  await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
     return response.json();
}
async function getalbum(id:string):Promise<Post[]>{
     const response =  await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
     return response.json();
}
export default async function page({params,}:{params: Promise<{id:string}>;}) {
    const {id} = await params;
    const postdata = getposts(id);
    const albumdata = getalbum(id);
    const [posts,albums] = await Promise.all([postdata,albumdata]);
    return(
    <div className="w-full grid grid-cols-2 gap-3">
    </div>)
}