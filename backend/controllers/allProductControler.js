const AllProduct = require("../model/productSchema");

const allProductController= async (req, res) => {
  const allproduct = await AllProduct.find()
  res.send(allproduct)
};
module.exports = allProductController
