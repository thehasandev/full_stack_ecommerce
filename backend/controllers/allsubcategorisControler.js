const SubCategorisSchema = require("../model/subcategorisSchema");

const allSubcategorisControler = async (req, res) => {
  const subcategoris = await SubCategorisSchema.find();
  res.send(subcategoris)
};
module.exports = allSubcategorisControler;
