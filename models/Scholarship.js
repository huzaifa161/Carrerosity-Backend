const mongoose = require('mongoose');


const ScholarshipSchema = new mongoose.Schema({
    city:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'City'
    },        
    createdAt:{
        type:Date, default: Date.now
    },
    deadline:{
        type: Date,
        required: true
    },
    university:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'University'
    },
    programTypes:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'ProgramType'
    }],
    year:Number
});

module.exports = mongoose.model('Scholarship',ScholarshipSchema);   