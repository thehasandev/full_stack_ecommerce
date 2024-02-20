const RegistrationSchema = require("../model/registrationSchema")

const registrationController = async (req, res) => {
  const { userName, userEmail, userPassword } = req.body

  const exjectionUser = await RegistrationSchema.find({ userEmail })

  if (exjectionUser.length > 0) {
    res.send("This email is already used")
  } else {
    const data = new RegistrationSchema({
      userName,
      userEmail,
      userPassword
    })
    data.save()
    res.send("Resistraion Sucessfull")
  }




}
module.exports = registrationController