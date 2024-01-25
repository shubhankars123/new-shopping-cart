import dotenv from "dotenv";
import mongoose from 'mongoose';


dotenv.config()

export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to mongoDB Database.`)
    
    } catch (error) {
        console.log(`Error in mongodb ${error}`)       
    }
}