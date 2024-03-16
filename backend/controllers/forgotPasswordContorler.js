const nodemailerValidator = require("../helpers/nodemailerValidator");
const RegistrationUsers = require("../model/registrationSchema");
const jwt = require('jsonwebtoken');
const forgotPasswordControler = async (req, res) => {
  const { email } = req.body;

  const findEmail = await RegistrationUsers.findOne({ userEmail: email });

  if (findEmail) {
    const token = jwt.sign({ email: email }, "hasddflsdaf")
    nodemailerValidator(email,`Change Your Password`,`<a href="http://localhost:5173/change-password/${token}">Change Your Password</a>`)
    res.send({sucess:"Check Your Email"})

  } else {
    res.send({ error: "Could Not Find Emial" });
  }
};
module.exports = forgotPasswordControler;
