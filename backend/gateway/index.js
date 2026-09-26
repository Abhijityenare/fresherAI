import express from "express"
import dotenv from "dotenv"
import proxy from "express-http-proxy"
import cors from "cors"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import { getCurrentUser } from "./controller/user.Controller.js"
import { isAuth } from "./middleware/isAuth.js"
dotenv.config()

const PORT = process.env.PORT || 6000

const app = express()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(morgan("dev"))
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("hello from gateway")
})

app.use("/api/auth",proxy(process.env.AUTH_SERVICE_URL))
app.get("/api/me",isAuth,getCurrentUser)
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    
})