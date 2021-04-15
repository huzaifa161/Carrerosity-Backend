const University = require('../models/University');

exports.getUniversities = async (req, res) => {

    try {
        const Data = await University.find({},'_id title').exec();
        return res.json({
            statusCode: 200,
            Data
        });
    } catch (err) {
        console.log(err)
        return res.json({
            statusCode: 400,
            message:"Something Went Wrong"
        });

    }
}

exports.compareUniversities =  async (req, res) => {
    const { id1, id2 } = req.params;
    try {
        const Data = await University.find({ '_id': { $in: [id1, id2] } }).exec();
        return res.json({ statusCode: 200, Data });
    } catch (err) {
        return res.json({ statusCode: 400, message:"Something Went Wrong" });
    }
}