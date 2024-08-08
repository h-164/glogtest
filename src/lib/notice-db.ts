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

export const deleteNotice = async(_id:string)=>{
    await connectDb();
    const {deletedCount} = await Notice.deleteOne({_id});

    if(deletedCount === 0){
        throw new Error("failed to delete")
    }
}

export const updateNotice = async ({
    _id,
    count
  }: {
    _id: string;
    count:number;
  }) => {
    await connectDb();
    const { matchedCount } = await Notice.updateOne({ _id }, { count });

  
    if (matchedCount === 0) {
      throw new Error("No document found");
    }
  };