const mongoose = require('mongoose');


const UniversitySchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    image:String,
    city:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'City'
    },
    address:String,
    email:{
        type:String,
        unique: true
    },
    phoneNumber:String,
    createdAt:{
        type: Date,
        default: Date.now
    },
    campusFacilities:{
        auditorium:Boolean,
        wifi: Boolean,
        scienceLabs:Boolean,
        computerLabs:Boolean,
        library:Boolean,
        cafeteria:Boolean,
        gymnasium:Boolean,
        indoorSports:Boolean,
        outdoorSports:Boolean,
        swimmingPool:Boolean,
        transport: Boolean
    }

});


module.exports = mongoose.model('UniversitySchema',UniversitySchema);