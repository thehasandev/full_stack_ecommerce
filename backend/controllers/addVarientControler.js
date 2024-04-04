const balnkInputValidator = require("../helpers/blankInputValidator");
const ProductSchema = require("../model/productSchema");
const addVarientControler = async (req, res) => {
  console.log(req.body);
  const { productId,varientName, discription, salePrice, ragulerPrice} = req.body;
  const exjectinName = await ProductSchema.findOne({ varientName: varientName });

};

module.exports = addVarientControler;
