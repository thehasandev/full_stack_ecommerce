const CategorisSchema = require("../model/categorisSchema");

const allcategorisControler = async (req, res) => {
  const categoris = await CategorisSchema.find();
  res.send(categoris)
};
module.exports = allcategorisControler;
