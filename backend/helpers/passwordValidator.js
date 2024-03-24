const passwordValidator =(passoword)=>{
  if(passoword.length>=6){
    return false
  }else{
    return true
  }
}
module.exports = passwordValidator