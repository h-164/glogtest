import {Notice} from "../models/notice.schema";
import {connectDb} from "./connect-db";

export const getNotices = async ()=>{
    await connectDb();
    const notices = await Notice.find();

    return {notices};
}

export const postNotice = async ({
    title,
    body,
}: {
    title: string;
    body:string;
})=>{
    await connectDb();
    const notice = new Notice({title, body, date: Date.now()});
    await notice.save();

    return {notice};
}