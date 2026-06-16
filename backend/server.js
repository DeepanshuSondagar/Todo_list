import dotenv from "dotenv"
dotenv.config();

import express from "express";
import { connectDB } from "./db/connectDB.js";
import authRouter from "./route/auth.route.js";
import todoRouter from "./route/todo.route.js";
import cookieParser from "cookie-parser";
import { requireAuth } from "./middleware/auth.middleware.js";
import cors from "cors"


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true
}))

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/task", requireAuth, todoRouter);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));  
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));  
    });
}
 
app.listen(PORT,()=>{
    console.log(`Server is conneted on port`);
    connectDB();
});