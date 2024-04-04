const balnkInputValidator = require("../helpers/blankInputValidator");
const varientSchema = require("../model/varientSchema");

const addVarientControler = async (req, res) => {
  console.log(req.body);
  const { productId,varientName, discription, salePrice, ragulerPrice} = req.body;
  const exjectinName = await varientSchema.findOne({ varientName: varientName });
  console.log(exjectinName);

};

module.exports = addVarientControler;
