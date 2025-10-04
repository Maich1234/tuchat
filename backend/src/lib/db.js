import mongoose from "mongoose";

export const  ConnectDB  = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to mongo", conn.connection.host)
    }catch(err){
        console.error("Error connectiong to mongoDB", err)
        process.exit(1);
    }
}