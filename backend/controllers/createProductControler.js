const balnkInputValidator = require("../helpers/blankInputValidator");
const ProductSchema = require("../model/productSchema");
const createProductController = async (req, res) => {
  const { name, discription,  price } = req.body;
  const exjectinName = await ProductSchema.findOne({ name: name });
  if (exjectinName) {
    res.send({ error: "This product is already added" });
  } else {
    if (balnkInputValidator(!name)) {
      res.send({ error: "Product name is required" });
    } else if (balnkInputValidator(!price)) {
      res.send({ error: "Product price is required" });
    } else if (balnkInputValidator(!discription)) {
      res.send({ error: "Product description is required" });
    }else {
      const product = new ProductSchema({
        name: name,
        price: price,
        discription: discription,
        image: `/uploads/${req.file.filename}`,
      });
      product.save();
      res.send({ sucess: "Product Created" });
    }
  }
};

module.exports = createProductController;
