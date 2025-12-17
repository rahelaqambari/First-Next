export const dynamic = "force-static";
export const revalidate = 360;
export async function GET(){
    return Response.json({ time: new Date().toLocaleTimeString() });
}