
import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest){
    // const headercontent = new Headers(request.headers);
    // console.log(headercontent.get("authorization"));
    const headercontent = await headers();
    console.log(headercontent.get("authorization"));
    const cookieinfo =  request.cookies.get("theme");
    console.log(cookieinfo);
    return new Response("<h1>hello from api</h1>",{
        headers: { "Content-type": "text/html",
             "Set-Cookie": "theme=light",
        },
       
    });
} 