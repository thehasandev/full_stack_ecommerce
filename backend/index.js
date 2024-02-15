require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const route = require("./routes")
const mongodbConfig = require('./config/mongodbConfig')

app.use(cors())
app.use(express.json())
mongodbConfig()

app.use(route)

app.listen(8000,()=>{
    console.log("Port is running");
})