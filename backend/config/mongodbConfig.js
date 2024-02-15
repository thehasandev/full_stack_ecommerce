const mongoose = require('mongoose');

const mongodbConfig =()=>{
    mongoose.connect(`mongodb+srv://${process.env.DATABAE_USER_NAME}:${process.env.DATABASE_PASSWORD}@cluster0.px58yxr.mongodb.net/${process.env.DATABAE_NAME}?retryWrites=true&w=majority`)
    .then(() => console.log('Connected!'))
}

module.exports = mongodbConfig