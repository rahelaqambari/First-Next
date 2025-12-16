import { redirect } from "next/navigation";

export async function GET(){
    redirect('updatepro1');
    const list = [
        { id: 1,name: "computer",photo:"💻" },
        {  id:2,name: "Phone" , photo:"☎️"},
    ];
    return Response.json(list);
}