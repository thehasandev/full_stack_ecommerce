const mongoose = require('mongoose');
const { Schema } = mongoose;

const varientSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Product"
    },
    varientName: {
        type: String,
        require: true,
        uniqe : true
    },
    discription: {
        type: String,
        require: true,
    },
    salePrice :{
        type : String,
        require: true,
    },
    ragulerPrice :{
        type : String
    },
    image: {
        type: Object,
        require: true,
    },
})

module.exports = mongoose.model("Varient",varientSchema)