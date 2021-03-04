const express = require("express")
const dotenv= require('dotenv')
const morgan = require('morgan')

const app = express()


dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080

//morgan help to log request for a consle whenever we request
app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.send("crud application")
})

app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)})