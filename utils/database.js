import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async ()=>{
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log('COnnected to Database');
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName:"share_prompt",
            useNewURLParser : true,
        })
        isConnected = true;
        console.log('Database Connected');
    }catch(error){
        console.log(error);
    }
}