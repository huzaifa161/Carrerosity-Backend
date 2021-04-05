const mongoose = require('mongoose');

const ProgramTypesSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model('ProgramType', ProgramTypesSchema);