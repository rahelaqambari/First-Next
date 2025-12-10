
import { data } from "../data";
export async function GET(_request: Request ,{params}:{params: Promise<{id: string }>}){
    const {id} = await params;
     const index = data.findIndex((post)=> post.id === parseInt(id));
     return Response.json(data[index]);
}
export async function PATCH(request: Request ,{params}:{params: Promise<{id: string }>}){
    const {id}  = await params;
    const body = await request.json();
    const {title , content} = body;
    const index = data.findIndex((post)=> post.id === parseInt(id));
    data[index].title = title;
    data[index].content = content;
    return Response.json(data[index]);

}