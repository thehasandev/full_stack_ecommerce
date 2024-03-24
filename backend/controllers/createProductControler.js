const balnkInputValidator = require("../helpers/blankInputValidator");
const ProductSchema = require("../model/productSchema");
const createProductController = async (req, res) => {
  const { name, description, image, price } = req.body;
  const exjectinName = await ProductSchema.findOne({ name: name });
  
  if (exjectinName) {
    res.send({ error: "This product is already added" });
  } else {
    if (balnkInputValidator(!name)) {
      res.send({ error: "Product name is required" });
    } else if (balnkInputValidator(!price)) {
      res.send({ error: "Product price is required" });
    } else if (balnkInputValidator(!description)) {
      res.send({ error: "Product description is required" });
    } else if (balnkInputValidator(!image)) {
      res.send({ error: "Product image is required" });
    } else {
      const product = new ProductSchema({
        name: name,
        description: description,
        image: image,
        price: price,
      });
      product.save();
      res.send({ sucess: "Prduct Created" });
    }
  }
};

module.exports = createProductController;
