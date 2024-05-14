const categorisSchema = require("../model/categorisSchema");

const editCategoryContorllers = async (req, res) => {
  const { findName, updateName } = req.body;
  try {
    await categorisSchema.findOneAndUpdate(
      { name: findName },
      { name: updateName }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = editCategoryContorllers;
