import { deleteNotice, getNotices, postNotice, updateNotice } from "../../../lib/notice-db";
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
        const {title, body} = await request.json();
        const data = await postNotice({title, body});
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

export async function PATCH(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const _id = searchParams.get("_id");

    if (!_id) {
      return Response.json({ error: "_id is required" });
    }

    const { count} = await request.json();
    const data = await updateNotice({ _id, count });

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}