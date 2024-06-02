import { Request, Response } from "express"
import { User } from "../models/User"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import "dotenv/config"
import { check } from "express-validator"
const registerUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body
    try {
        const salt = await bcrypt.genSalt(Math.floor(Math.random() * 10))
        const hashedPassword = await bcrypt.hash(password, salt)
        await User.create({ username, email, password: hashedPassword })
        res.status(201).json({ message: "User created successfully" })
    } catch (error) {
        res.status(401).json({ message: "Invalid credentials" })
    }
}

const loginUser = async (req: Request, res: Response) => {
    const { usernameOrEmail, password } = req.body
    try {
        const user = await User.findOne({
            $or: [
                { email: usernameOrEmail },
                { username: usernameOrEmail }
            ]
        })
        if (!user) {
            res.status(401).json({ message: "Invalid credentials" })
        } else {

            const isMatch = await bcrypt.compare(password, user.password)
            if (isMatch) {
                const { JWT_SECRET_KEY } = process.env
                const token = jwt.sign({ user }, JWT_SECRET_KEY!, {
                    expiresIn: "1h"
                })
                res.cookie("access_token", token, {
                    maxAge: 1000 * 3600
                }).status(200).json({
                    message: "User logged in successfully",
                    username: user.username,
                    email: user.email,
                    token
                })

            }
            else {
                res.status(401).json({ message: "Invalid credentials" })
            }
        }
    } catch (error) {
        res.status(401).json(error)
        console.log("object")
    }
}

export {
    loginUser,
    registerUser
}