const balnkInputValidator = require("../helpers/blankInputValidator");
const SubCategory = require("../model/subcategorisSchema")

const createSubCategoriControler =async(req,res)=>{
  const {name,ownerId,categoriId} = req.body
  const findname = await SubCategory.findOne({name : name})
  
  if(findname){
    res.send({error:"This Subcategory is already in exjected"})
  }else if(balnkInputValidator(name)){
    res.send({"error": "Sub Categori is requied"})
  }else if(balnkInputValidator(categoriId)){
    res.send({"error": "Categoris is requied"})
  }else{
    const addSubCategoris = new SubCategory({
        name : name.toLowerCase(),
        ownerId : ownerId,
        categoriId: categoriId
    })
    res.send({sucess:"Create a Sub categori"})
    addSubCategoris.save()
  }
}

module.exports = createSubCategoriControler
