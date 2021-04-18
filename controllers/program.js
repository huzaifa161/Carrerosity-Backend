const ProgramType = require('../models/ProgramType');

exports.getProgramTypes = async (req, res) => {
    try {
        const Data = await ProgramType.find().exec();
        return res.json({
            statusCode: 200,
            Data
        });
    } catch (err) {
        return res.json({
            statusCode: 400,
            message:"Something Went Wrong"
        });
    }
}