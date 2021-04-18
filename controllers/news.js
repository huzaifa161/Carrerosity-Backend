const News = require('../models/News');


exports.getNews = async (req, res) => {
    try {
        const Data = await News.find().exec();
        return res.json({ statusCode: 200, Data });
    } catch (err) {
        return res.json({ statusCode: 400, message: "Something Went Wrong" });
    }
}
exports.getNewsDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const Data = await News.find({ _id:id }).exec();
        return res.json({ statusCode: 200, Data });
    } catch (err) {
        return res.json({ statusCode: 400, message: "Something Went Wrong" });
    }
}