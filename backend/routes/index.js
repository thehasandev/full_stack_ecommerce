const express = require('express')
const _ = express.Router()
const apiRoutes = require("./api")

const api = "/api/v1"

_.use(api,apiRoutes)

_.use(api,(req,res)=>res.send("Api is not Found"))

module.exports = _