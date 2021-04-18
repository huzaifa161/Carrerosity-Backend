const router = require('express').Router();

const { getNews, getNewsDetails } = require('../controllers/news');

router.get('/:id',getNewsDetails)

router.get('/', getNews)


module.exports = router;