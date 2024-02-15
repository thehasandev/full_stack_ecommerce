const express = require('express')
const _ = express.Router()
const registrationController = require('../../controllers/registrationController')
const sequireApi = require('../../middleware/sequireApi')

_.post("/registration",sequireApi,registrationController)





module.exports = _