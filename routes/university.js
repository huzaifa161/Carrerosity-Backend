const router = require('express').Router();

const {
    getUniversities,
    compareUniversities,
    getAdmissions,
    getAdmissionsByProgramType,
    getScholarships,getScholarshipsByProgramType, getUniversityDetails } = require('../controllers/university');




router.get('/', getUniversities);


router.get('/compare/:id1/:id2', compareUniversities);

router.get('/admissions', getAdmissions);

router.get('/admissions/:id', getAdmissionsByProgramType);

router.get('/scholarships', getScholarships);
router.get('/scholarships/:id', getScholarshipsByProgramType);

router.get('/:id', getUniversityDetails);
module.exports = router;