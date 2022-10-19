const router = require('express').Router();

router.use('/news', require('./news.routes'));

module.exports = router;
