const validNewsSources = {
    bbcNews: 'bbc-news',
    engadget: 'engadget',
    foxNews: 'fox-news',
    techcrunch: 'techcrunch',
    theTimesOfIndia: 'the-times-of-india',
    theWashingtonTimes: 'the-washington-times',
};

const defaultNews = {
    source: {
        id: 'the-verge',
        name: 'The Verge',
    },
    author: 'Jennifer Pattison Tuohy',
    title: 'Nest Doorbell wired review: Hello again',
    description: 'Slimmer, sleeker, and with better video quality',
    url: 'https://www.theverge.com/23404602/google-nest-doorbell-wired-review-hello',
    urlToImage:
        'https://cdn.vox-cdn.com/thumbor/-v8L0tolwt4bKSf_qIZq_11DfME=/0x0:2040x1360/1200x628/filters:focal(964x362:965x363)/cdn.vox-cdn.com/uploads/chorus_asset/file/24100831/226345_Nest_Doorbell_wired_JTuphy_0008.jpg',
    publishedAt: '2022-10-18T14:00:00Z',
    content:
        'An almost worthy successor to the excellent Nest Hello, the new Nest Doorbell wired is faster, smarter, and sleeker and has better video quality. But spotty behavior on 2.4GHz networks lets it down. … [+16788 chars]',
};

module.exports = {
    validNewsSources,
    defaultNews,
};
