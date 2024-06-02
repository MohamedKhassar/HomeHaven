import mongoose from "mongoose"
const { DB_URL } = process.env
export const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL!);
        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    }
}