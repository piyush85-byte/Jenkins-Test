const express=require("express")
const cors=require("cors")


app.use(cors())

const app=express()



app.listen(5500,()=>console.log("Server started on port 5500"))