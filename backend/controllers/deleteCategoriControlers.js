const categorisSchema = require("../model/categorisSchema");
const deleteCategoryContorllers = async (req, res) => {
  const { categoryName } = req.body;
  await categorisSchema.findOneAndDelete({ name: categoryName });
};

module.exports = deleteCategoryContorllers;
