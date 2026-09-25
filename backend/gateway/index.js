import express from "express"
import dotenv from "dotenv"
import proxy from "express-http-proxy"
dotenv.config()

const PORT = process.env.PORT || 6000

const app = express()
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("hello from gateway")
})

app.use("/api/auth",proxy(process.env.AUTH_SERVICE_URL))

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    
})