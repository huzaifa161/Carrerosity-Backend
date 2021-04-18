const University = require('../models/University');
const Admission = require('../models/Admission');
const Scholarship = require('../models/Scholarship');
exports.getUniversities = async (req, res) => {

    try {
        const Data = await University.find({},'_id title').exec();
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

exports.compareUniversities =  async (req, res) => {
    const { id1, id2 } = req.params;
    try {
        const Data = await University.find({ '_id': { $in: [id1, id2] } }).exec();
        return res.json({ statusCode: 200, Data });
    } catch (err) {
        return res.json({ statusCode: 400, message:"Something Went Wrong" });
    }
}


exports.getAdmissions = async (req, res) => {
    try {
        const Data = await Admission.find().populate('programTypes').populate('university').exec();
        return res.json({ statusCode: 200, Data });
    } catch (err) {
        return res.json({ statusCode: 400, message:"Something Went Wrong" });
    }
}
exports.getAdmissionsByProgramType = async (req, res) => {
    try {
        const { id } = req.params;
        const Data = await Admission.find({ programTypes: id }).populate('programTypes').populate('university').exec();
        return res.json({ statusCode: 200, Data });
    } catch (err) {
        return res.json({ statusCode: 400, message:"Something Went Wrong" });
    }
}
exports.getScholarships = async (req, res) => {
    try {
        const Data = await Scholarship.find().populate('programTypes').populate('university').exec();
        return res.json({ statusCode: 200, Data });
    } catch (err) {
        return res.json({ statusCode: 400, message: "Something Went Wrong" });
    }
}
exports.getScholarshipsByProgramType = async (req, res) => {
    try {
        const { id } = req.params;
        const Data = await Scholarship.find({ programTypes: id }).populate('programTypes').populate('university').exec();
        return res.json({ statusCode: 200, Data });
    } catch (err) {
        return res.json({ statusCode: 400, message:"Something Went Wrong" });
    }
}