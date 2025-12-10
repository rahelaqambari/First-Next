import { NextRequest } from "next/server";
import { data } from "./data";
export async function GET(request: NextRequest){
    const searchParams =  request.nextUrl.searchParams;
    const query = searchParams.get("qurey");
    const filterdata = query ? data.filter((post) =>{
        return post.title.toLowerCase().includes(query.toLocaleUpperCase()) || post.content.toLowerCase().includes(query)
        })
        : data;
         return Response.json(filterdata)
}
export async function POST(request: Request){
    const body = await request.json();
    const {title, content} = body;
    const newPost = {
        id: data.length + 1,
        title,
        content,
    };
    data.push (newPost);
    return Response.json(newPost,{
        headers: { "content-typ": "application/json"},
        status: 201,
    });
}