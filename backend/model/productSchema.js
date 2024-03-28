const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        require: true,
        uniqe : true
    },
    discription: {
        type: String,
    },
    price :{
        type : String
    },
    image: {
        type: Object,
    }
})

module.exports = mongoose.model("Product",productSchema)