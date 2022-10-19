const {
    generateRandomElement,
    generateRandomProperty,
} = require('../utils/utility');
const { defaultNews, validNewsSources } = require('../DATA/valid_news_sources');

class News {
    getNewsBySource = (source) => {
        switch (source) {
            case 'bbcNews':
                return require('../DATA/bbc_news');
            case 'engadget':
                return require('../DATA/engadget_news');
            case 'foxNews':
                return require('../DATA/fox_news');
            case 'techcrunch':
                return require('../DATA/techcrunch_news');
            case 'theTimesOfIndia':
                return require('../DATA/toi_news');
            default:
                return require('../DATA/twt_news');
        }
    };

    getNewsByRandomSource = (newsCount = 10) => {
        const result = [];
        for (let i = 0; i < newsCount; i++) {
            const news = this.getSingleRandomNews();
            result.push(news);
        }
        return result;
    };

    getSingleRandomNews = () => {
        const source = generateRandomProperty(validNewsSources);
        const newsArray = this.getNewsBySource(source);
        const news = newsArray[Math.floor(Math.random() * newsArray.length)];
        if (!!!news) {
            return defaultNews;
        }
        if (!!news) {
            for (const key in news) {
                if (!!!news[key]) return defaultNews;
            }
        }
        return news;
    };
}

module.exports = News;
