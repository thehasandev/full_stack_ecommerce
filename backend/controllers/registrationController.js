const RegistrationSchema = require("../model/registrationSchema")

const registrationController = (req, res) => {
  const { userName, userEmail, userPassword } = req.body
  const data = new RegistrationSchema({
    userName,
    userEmail,
    userPassword
  })
  data.save()
  res.send("data send")
}
module.exports = registrationController