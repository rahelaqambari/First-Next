export const dynamic = "force-static";
export async function GET(){
    const list = [
        {  id:1,name: "Computer", photo: "💻"},
        {  id:2,name: "Phone", photo: "☎️"},
        {  id:2,name: "Headphone", photo: "🎧"},
        {  id:2,name: "TV", photo: "📺"},
        {  id:2,name: "Watch", photo: "⌚"},
        {  id:2,name: "Camera", photo: "📷"},
        {  id:2,name: "Projector", photo: "📽️"},
        {  id:2,name: "Mike", photo: "🎤"},
    ];
    return Response.json(list);
}