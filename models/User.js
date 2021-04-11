const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    fullName:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    salt:{
        type:String,
        required: true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user',UserSchema);