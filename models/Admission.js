const mongoose = require('mongoose');
const AdmissionSchema = new mongoose.Schema({
    details:String,
    lastDate:Date,
    university:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'University'
    },
    createdAt:{
        type:Date, default: Date.now
    },
    programTypes:[{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'ProgramType'
    }]

});

module.exports = mongoose.model('Admission',AdmissionSchema)