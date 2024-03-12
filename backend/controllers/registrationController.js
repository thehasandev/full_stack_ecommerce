const balnkInputValidator = require("../helpers/blankInputValidator");
const emailValidator = require("../helpers/emailValidator");
const nodemailerValidator = require("../helpers/nodemailerValidator");
const passwordValidator = require("../helpers/passwordValidator");
const RegistrationSchema = require("../model/registrationSchema")
const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator')




const registrationController = async (req, res) => {
  const { userName, userEmail, userPassword } = req.body

  if (balnkInputValidator(userName)) {
    res.send({ "error": "Name is requried" })
  } else if (balnkInputValidator(userEmail)) {
    res.send({ "error": "Email is required" })
  } else if (emailValidator(userEmail)) {
    res.send({ "error": "Please enter a valid email" })
  } else if (balnkInputValidator(userPassword)) {
    res.send({ "error": "Password is required" })
  } else if (passwordValidator(userPassword)) {
    res.send({ "error": "Password have must 1 to 6" })
  } 
  else {
    bcrypt.hash(userPassword, 10, async function (err, hash) {
      const exjectionUser = await RegistrationSchema.find({ userEmail })
    
      const otp =  otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets :false });
     
      if (exjectionUser.length > 0) {
        res.send({ "error": "This email is already used" })
      } else {

        nodemailerValidator(userEmail,otp)
        
        const data = new RegistrationSchema({
          userName,
          userEmail,
          userPassword: hash,
          otp : otp
        })
        data.save()
        res.send({ "error": "Registration Sucessfull" })
      }

    });

  }




}
module.exports = registrationController