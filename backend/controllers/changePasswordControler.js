const RegistrationUsers = require("../model/registrationSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const changePasswordControler = async (req, res) => {
  const { token , password} = req.body;

    const decoded = jwt.verify(token, 'hasddflsdaf');

  const findEmail = await RegistrationUsers.findOne({ userEmail: decoded.email });
 
  if(findEmail){
    bcrypt.hash(password, 10,async function(err, hash) {
        await RegistrationUsers.findOneAndUpdate({userEmail:decoded.email},{userPassword:hash})
    }); 
    res.send({sucess:"Your password Changed"})
  }else{
    res.send({error:"You are not valid user"})
  }
 
};
module.exports = changePasswordControler;
