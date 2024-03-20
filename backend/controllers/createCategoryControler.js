const balnkInputValidator = require("../helpers/blankInputValidator")
const Categoris = require("../model/categorisSchema")

const createCategoryControler =async(req,res)=>{
  const {name,ownerId} = req.body
  
  const findname = await Categoris.findOne({name : name})
  

  if(findname){
    res.send({error:"This category is already in exjected"})
  }else if(balnkInputValidator(name)){
    res.send({error:"Categoris name is requied"})
  }else{
    {
      const addCategoris = new Categoris({
          name : name.toLowerCase(),
          ownerId : ownerId
      })  
      
      addCategoris.save()
      res.send({sucess:"Create a new categori"})
    }
  }
 
}

module.exports = createCategoryControler
