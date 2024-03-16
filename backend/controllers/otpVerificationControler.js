const RegistrationUsers = require("../model/registrationSchema")

const otpVerificationControler  =async(req,res)=>{
  const {email,otp} = req.body

  const findEmail = await RegistrationUsers.findOne({userEmail : email})
  
 if(findEmail){

   if( !findEmail.emailVerified && findEmail.otp == otp){
       await RegistrationUsers.findOneAndUpdate({userEmail : email},{otp:"",emailVerified:true})
       res.send({"sucess":"Verification Sucessfull"})
    }else{
        res.send({"error":"Otp Not Match"})
    }
 }else{
   res.send({"error":"This email is wrong"})
 }
}
module.exports = otpVerificationControler