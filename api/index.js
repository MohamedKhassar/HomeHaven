import express from "express";
import "dotenv/config";
import connectDB from "./connection/DB.js";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import errorHandler from "./middlewares/erro.js";
const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(express.json());

// routes
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);
app.use(errorHandler);
// app listening
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on port ${PORT}`);
});
