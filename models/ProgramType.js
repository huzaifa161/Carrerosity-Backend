const mongoose = require('mongoose');

const ProgramTypesSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    createdAt: {
        type:Date, default: Date.now
    }
});

module.exports = mongoose.model('ProgramType', ProgramTypesSchema);