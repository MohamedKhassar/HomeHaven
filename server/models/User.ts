import mongoose from "mongoose";
import User from "../config/types";
const userSchema = new mongoose.Schema<User>({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        minLength: 8,
        required: true
    },
    phone: {
        type: String,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    wishList: {
        type: [String],
        default: []
    }
},
    {
        timestamps: true
    }
)

export const User = mongoose.model<User>("User", userSchema)
