const balnkInputValidator = require("../helpers/blankInputValidator");
const ProductSchema = require("../model/productSchema");
const createProductController = async (req, res) => {
  console.log(req.file);
  const { name, discription, salePrice, ragulerPrice ,slug} = req.body;
  const exjectinName = await ProductSchema.findOne({ name: name });
  if (exjectinName) {
    res.send({ error: "This product is already added" });
  } else {
    if (balnkInputValidator(!name)) {
      res.send({ error: "Product name is required" });
    } else if (balnkInputValidator(!ragulerPrice)) {
      res.send({ error: "Product ragulerPrice is required" });
    } else if (balnkInputValidator(!salePrice)) {
      res.send({ error: "Product salePrice is required" });
    } else if (balnkInputValidator(!discription)) {
      res.send({ error: "Product description is required" });
    } else {
      const product = new ProductSchema({
        name: name,
        ragulerPrice: ragulerPrice,
        salePrice : salePrice,
        discription: discription,
        image: `/uploads/${req.file.filename}`,
        slug: slug,
      });
      product.save();
      res.send({ sucess: "Product Created" });
    }
  }
};

module.exports = createProductController;
