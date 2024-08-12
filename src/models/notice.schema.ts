import mongoose, {Schema} from "mongoose";

export const NoticeSchema = new Schema({
    title:String,
    body:String,
    profileImg:String,
    date: {
        type:Date,
        default:Date.now,
    },
    count:{
        type:Number,
        default:0
    }
})

export const Notice = 
    mongoose.models.Notice?? mongoose.model("Notice", NoticeSchema);