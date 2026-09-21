import mongoose from "mongoose";

const MONGO_URI = "mongodb://127.0.0.1:27017/studentDB";

export const mongoDBlink = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed:", error.message);
  }
};
