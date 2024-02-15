require('dotenv').config()
const express = require('express')
const app = express()
const route = require("./routes")
const mongodbConfig = require('./config/mongodbConfig')

mongodbConfig()

app.use(route)


app.listen(8000,()=>{
    console.log("Port is running");
})