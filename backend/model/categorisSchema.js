const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorisSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  image: {
    type: Object,
    require: true,
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    enum: ["pending", "approve", "reject"],
    default: "pending",
  },
});

module.exports = mongoose.model("Category", categorisSchema);
