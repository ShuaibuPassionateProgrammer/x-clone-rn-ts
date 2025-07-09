import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
        const conn = mongoose.connect(ENV.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch (error) {
        console.log("Error to connecting to mongodb: " + error?.message);
        process.exit(1);
    }
};