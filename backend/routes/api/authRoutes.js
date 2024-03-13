const express = require('express')
const _ = express.Router()
const registrationController = require('../../controllers/registrationController')
const sequireApi = require('../../middleware/sequireApi')
const otpVerificationControler = require('../../controllers/otpVerificationControler')

_.post("/registration",sequireApi,registrationController)
_.post("/otpverification",otpVerificationControler)







module.exports = _