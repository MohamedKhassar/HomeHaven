import mongoose from "mongoose";
import "dotenv/config";
const { DB_URL } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
