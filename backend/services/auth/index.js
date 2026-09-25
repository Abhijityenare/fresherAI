import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import authRouter from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"
dotenv.config()

const PORT = process.env.PORT || 6001

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use("/",authRouter)

app.listen(PORT,()=>{
    console.log(`auth service running on port ${PORT}`);
    connectDB()
})