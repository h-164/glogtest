import { getNotices, postNotice } from "../../../lib/notice-db";
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
        const data = await postNotice({title,body});
        return Response.json({ data });
    } catch (error:any) {
      console.error(error.response);
      
      return Response.json({ error}, { status: 500 });
    }
}
