import express from "express";
import "dotenv/config"
import { connectDB } from "./config/DB";
import authRouter from "./routes/auth"
import { authMiddleware } from "./middleware/verfyToken";
import cookieParser from "cookie-parser";
const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRouter)
app.get("/api", authMiddleware, (req, res) => {
    res.status(200).json({
        message: "Welcome to HomeHaven"
    })
})

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`)
})