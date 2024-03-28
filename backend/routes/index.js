const express = require('express')
const _ = express.Router()
const apiRoutes = require("./api")

const api = process.env.API_BASE_URL

_.use(api,apiRoutes)
_.use(api,(req,res)=>res.send("Api is not Found"))

module.exports = _