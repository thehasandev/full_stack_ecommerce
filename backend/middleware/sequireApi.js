const sequireApi =(req,res,next)=>{
    if(req.headers.authorization == "asdfwerewrewrew"){
        next()
    }else{
        res.send("You are not valid user")
    }
}
module.exports = sequireApi