import { postNotice } from "../../../lib/notice-db";
import { NextRequest } from "next/server";

export async function POST(request:NextRequest){
    try {
        const {title, body} = await request.json();
        const data = await postNotice({title,body});
        return Response.json({ data });
    } catch (error:any) {
      console.error(error.response);
      
      return Response.json({ error: 'An error occurred' }, { status: 400 });
    }
}