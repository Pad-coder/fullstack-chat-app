import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://padmanaban870:NAAGt2BWr9WkIxDg@cluster0.r8nncjg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
