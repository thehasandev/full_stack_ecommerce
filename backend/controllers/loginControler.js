const RegistrationUsers = require("../model/registrationSchema")
const bcrypt = require('bcrypt');
const loginControler  =async(req,res)=>{
  const {email,password} = req.body

  const findEmail = await RegistrationUsers.findOne({userEmail : email})
  
  
  if(findEmail){
   bcrypt.compare(password, findEmail.userPassword, function(err, result){
   if(result){
          res.send({
           id : findEmail._id,
           usename : findEmail.userName,
           useremail : findEmail.userEmail,
           role : findEmail.role,
           isEmailverified: findEmail.emailVerified
          })
   } else{
    res.send({error : "Cradantial Not Match"})
   }
  });
  }else{
    res.send({error : "Cradantial Not Match"})
  }
  
 
}
module.exports = loginControler