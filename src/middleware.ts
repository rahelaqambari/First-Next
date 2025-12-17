import { NextRequest , NextResponse } from "next/server";

export function middleware(request: NextRequest){
//  return NextResponse.rewrite(new URL('/',request.url));
const response = NextResponse.next();
const info = request.cookies.get("amount of product");
if (!info){
    response.cookies.set("amount of product", "1000");
}
if(request.nextUrl.pathname ==="/pro1"){
    return NextResponse.rewrite(new URL('/updatepro1',request.url));
}
return response;
}
// export const config = {
//     matcher: "/post"
// }