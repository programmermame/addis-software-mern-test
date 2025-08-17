import mongoose from "mongoose";
import 'dotenv/config';

const connectMongoDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI!);
        console.log("Connected to MONGODB successfully");
    } catch (error) {
        console.log(`MONGODB Connection Error:${error}`);
    }
}

export default connectMongoDB;