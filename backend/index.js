require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const route = require("./routes")
const mongodbConfig = require('./config/mongodbConfig')
const path = require("path");

app.use(cors())
app.use(express.json())
mongodbConfig()

app.use(route)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.listen(8000,()=>{
    console.log("Port is running");
})