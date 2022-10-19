const httpStatus = require('http-status');

const News = require('../services/news.services');
const NewsInstance = new News();

const getNewsByCount = async (req, res) => {
    try {
        const articles = NewsInstance.getNewsByRandomSource(10);
        const result = {
            status: 'ok',
            totalResults: articles.length,
            articles,
        };
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        const result = {
            status: 'internal server error',
            message: error.message,
            stack: error.stack,
        };
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(result);
    }
};

module.exports = {
    getNewsByCount,
};
