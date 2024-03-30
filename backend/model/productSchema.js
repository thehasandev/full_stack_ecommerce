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
    slug :{
        type : String
    }
})

module.exports = mongoose.model("Product",productSchema)