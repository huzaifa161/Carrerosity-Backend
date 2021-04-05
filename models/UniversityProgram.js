const mongoose = require('mongoose');
const UniversityProgramSchema = new mongoose.Schema({
    university:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: "University"
    },
    program:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: "Program"
    },
    programType:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:''
    },
    programFees:Number,
    courseFee: Number,
    courses:Number,
    duration:Number,
    percentageRequired: Number,
    createdAt:{
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('UniversityProgram',UniversityProgramSchema);