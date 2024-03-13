const mongoose = require('mongoose');
const { Schema } = mongoose;

const registrationSchema = new Schema({
    userName: {
        type: String,
        require: true
    },
    userEmail: {
        type: String,
        require: true
    },
    userPassword: {
        type: String,
        require: true
    },
    role : {
        type: String,
        enum: ["user","merchent","admin"],
        default: "user"
    },
    otp : {
        type : String
    },
    emailVerified: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("items",registrationSchema)