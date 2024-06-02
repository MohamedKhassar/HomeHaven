import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config"
import { CustomRequest } from "../config/types";
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const access_token = req.cookies.access_token
    if (access_token) {
        const { JWT_SECRET_KEY } = process.env
        jwt.verify(access_token, JWT_SECRET_KEY!, (err: any, user: any) => {
            if (err) {
                res.status(401).json({ message: "Unauthorized" })
            }
            (req as CustomRequest).user = user
            next()
        })
    } else {
        res.status(401).json({ message: "Unauthorized" })
    }
}