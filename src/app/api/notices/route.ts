import { deleteNotice, getNotices, postNotice } from "../../../lib/notice-db";
import { NextRequest } from "next/server";


export async function GET(request: NextRequest){
  try {
    const data = await getNotices();
    return Response.json({ data });
 
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function POST(request:NextRequest){
    try {
        const {title, body, count} = await request.json();
        const data = await postNotice({title,body, count});
        return Response.json({ data });
    } catch (error:any) {
      console.error(error.response);
      
      return Response.json({ error}, { status: 500 });
    }
}

export async function DELETE(request:NextRequest){
  try{
    const {searchParams} = request.nextUrl
    const _id = searchParams.get('_id')

    if(!_id){
      throw new Error("missing id")
    }

    const data = await deleteNotice(_id);
    return Response.json({data})
  }catch(error){
    return Response.json({error},{status:500})
}}