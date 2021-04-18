const router = require('express').Router();
const { getCities } = require('../controllers/meta');
router.get('cities',getCities)

module.exports = router;