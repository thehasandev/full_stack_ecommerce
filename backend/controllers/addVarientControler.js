const balnkInputValidator = require("../helpers/blankInputValidator");
const varientSchema = require("../model/varientSchema");

const addVarientControler = async (req, res) => {
  const { productId,varientName, discription, salePrice, ragulerPrice} = req.body;
  const exjectinName = await varientSchema.find({ varientName: varientName });
 

   if(exjectinName.length>0){
  res.send({"error":"This name is already in declaire"})
 }else{
   const addvarient = new varientSchema({
     productId ,
     varientName,
     ragulerPrice,
     salePrice,
     discription,
     image : `/uploads/${req.file.filename}`
   }).save()
   res.send({"sucess": "Created Varient"})
 }


};

module.exports = addVarientControler;
