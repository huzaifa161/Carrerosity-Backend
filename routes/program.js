const router = require('express').Router();
const { getProgramTypes } = require('../controllers/program');


router.get('/programTypes', getProgramTypes)

module.exports = router;