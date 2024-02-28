const passwordValidator =(passoword)=>{
  if(passoword.length<=6){
    return true
  }else{
    return false
  }
}
module.exports = passwordValidator