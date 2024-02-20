const RegistrationSchema = require("../model/registrationSchema")
const bcrypt = require('bcrypt');


const registrationController = async (req, res) => {
  const { userName, userEmail, userPassword } = req.body
  
  bcrypt.hash(userPassword, 10,async function (err, hash) {

    const exjectionUser = await RegistrationSchema.find({ userEmail })
    if (exjectionUser.length > 0) {
      res.send("This email is already used")
    } else {
      const data = new RegistrationSchema({
        userName,
        userEmail,
        userPassword :hash
      })
      data.save()
      res.send("Registration Sucessfull")
    }
    
 });




}
module.exports = registrationController