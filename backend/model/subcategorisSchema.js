const mongoose = require('mongoose');
const { Schema } = mongoose;

const subcategorisSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    categoriId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },
    status :{
        type : String,
        enum : ["pending","approve","reject"],
        default : "pending"
    }

})

module.exports = mongoose.model("SubCategory",subcategorisSchema)