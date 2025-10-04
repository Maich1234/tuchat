import mongoose from "mongoose";

export const  ConnectDB  = async ()=>{
    try{
        const {MONGO_URI} = process.env;
        if(!MONGO_URI) throw new Error("MONGO URI not set")
        const conn = await mongoose.connect(MONGO_URI)
        console.log("Connected to mongo", conn.connection.host)
    }catch(err){
        console.error("Error connectiong to mongoDB", err)
        process.exit(1);
    }
}