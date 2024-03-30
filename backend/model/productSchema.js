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
    salePrice :{
        type : String
    },
    ragulerPrice :{
        type : String
    },
    image: {
        type: Object,
    },
    slug :{
        type : String
    }
})

module.exports = mongoose.model("Product",productSchema)