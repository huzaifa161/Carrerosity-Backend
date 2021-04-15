const router = require('express').Router();

const { getUniversities, compareUniversities } = require('../controllers/university');

router.get('/', getUniversities);
router.get('/compare/:id1/:id2', compareUniversities);
    
module.exports = router;