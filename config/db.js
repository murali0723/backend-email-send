const mongoose=require("mongoose");

const url="mongodb+srv://murali:murali@entribd.lkpfdf5.mongodb.net/login-system?retryWrites=true&w=majority";

const connectDB = async()=>{
    try{
        const con=await mongoose.connect(url);
        console.log(`MongooseDB connected: ${con.connection.host}`);
    } catch (error){
        console.log(error);
    }
};

module.exports=connectDB;