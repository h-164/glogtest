import {Mongoose, connect} from "mongoose"

const {DB_URL, DB_NAME} = process.env;

if(!DB_URL){
    throw new Error("db url error")
}

let _dbConnCache: Mongoose | null = null;

export const connectDb = async () => {
    try {
        if(_dbConnCache){
            return _dbConnCache
        }

    _dbConnCache = await connect(DB_URL, {
        dbName: DB_NAME,
    })
    console.log("connected to DB");
    } catch(error){
        console.log("hi")
        console.error(error);
        throw error;
    }
}