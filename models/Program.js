const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },createdAt:{
        type: Date,
        default: Date.now
    },
    programType: {
        type: mongoose.Types.ObjectId,
        ref:'ProgramType'
    }
});

module.exports = mongoose.model('Program',ProgramSchema);