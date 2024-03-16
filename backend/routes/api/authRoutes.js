const express = require('express')
const _ = express.Router()
const registrationController = require('../../controllers/registrationController')
const sequireApi = require('../../middleware/sequireApi')
const otpVerificationControler = require('../../controllers/otpVerificationControler')
const forgotPasswordControler = require('../../controllers/forgotPasswordContorler')
const changePasswordControler = require('../../controllers/changePasswordControler')

_.post("/registration",sequireApi,registrationController)
_.post("/otpverification",otpVerificationControler)
_.post("/forgotpassword",forgotPasswordControler)
_.post("/changepassword",changePasswordControler)







module.exports = _