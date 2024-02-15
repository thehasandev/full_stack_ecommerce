const mongoose = require('mongoose');

const mongodbConfig =()=>{
    mongoose.connect('mongodb+srv://shorab:8ReDO0iykga8E2CG@cluster0.px58yxr.mongodb.net/e-commerce?retryWrites=true&w=majority')
    .then(() => console.log('Connected!'))
}

module.exports = mongodbConfig