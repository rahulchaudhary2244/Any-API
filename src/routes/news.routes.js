const router = require('express').Router();
const { getNewsByCount } = require('../controller/news.controller');

router.get('/', getNewsByCount);

module.exports = router;
