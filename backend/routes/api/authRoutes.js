const express = require('express')
const _ = express.Router()

_.get("/ragistration",(req,res)=>{
    res.send("Hi i am reagestraion Route")
})

_.get("/login",(req,res)=>{
    res.send("Hi i am Login Route")
})



module.exports = _