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
        console.log('request')
        const Data = await Scholarship.find().populate('programTypes').populate('university').exec();
        return res.json({ statusCode: 200, Data });
    } catch (err) {
        console.log('err',err)
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


exports.getUniversityDetails = async (req, res) => {
    try {
        let campusFacilities = [];
        const { id } = req.params;
        const response = await University.findById(id).exec();
        if (response && response.campusFacilities) {
            let facilities = response.campusFacilities;
            facilities = Object.entries(facilities).filter(f => f[1]).map(f => f[0]);
            campusFacilities = facilities;
        } else {
            campusFacilities = [];
        }
        const Data = { ...response?._doc };
        Data.campusFacilities = campusFacilities;
       

        if (response._id) {
            const admissionReponse = await Admission.findOne({ university: response._id }).populate('programTypes').exec();
            if (admissionReponse && admissionReponse._id) {
                Data.admission = admissionReponse._doc;
                Data.admission.programTypes = admissionReponse.programTypes.map(pType => pType.title);
            } else {
                Data.admission = null;
            }
            const scholarshipReponse = await Scholarship.findOne({ university: response._id }).populate('programTypes').exec();
            if (scholarshipReponse && scholarshipReponse._id) {
                Data.scholarship = scholarshipReponse._doc;
                Data.scholarship.programTypes = scholarshipReponse.programTypes.map(pType => pType.title);
            } else {
                Data.scholarship = null;
            }

        }

        return res.json({ statusCode: 200, Data});
    } catch (err) {
        console.log('err',err)
        return res.json({ statusCode: 400, message:"Something Went Wrong" });

        
}
}