const balnkInputValidator = require("../helpers/blankInputValidator");
const passwordValidator = require("../helpers/passwordValidator");
const RegistrationSchema = require("../model/registrationSchema")
const bcrypt = require('bcrypt');


const registrationController = async (req, res) => {
  const { userName, userEmail, userPassword } = req.body

  if (balnkInputValidator(userName)) {
    res.send({ "error": "Name is requried" })
  } else if (balnkInputValidator(userEmail)) {
    res.send({ "error": "Email is required" })
  } else if (balnkInputValidator(userPassword)) {
    res.send({ "error": "Password is required" })
  } else if (passwordValidator(userPassword)) {
    res.send({ "error": "Password have must 1 to 6" })
  }
  else {
    bcrypt.hash(userPassword, 10, async function (err, hash) {
      const exjectionUser = await RegistrationSchema.find({ userEmail })
      if (exjectionUser.length > 0) {
        res.send({"error" : "This email is already used"})
      } else {
        const data = new RegistrationSchema({
          userName,
          userEmail,
          userPassword: hash
        })
        data.save()
        res.send({"error" : "Registration Sucessfull"})
      }

    });

  }




}
module.exports = registrationController