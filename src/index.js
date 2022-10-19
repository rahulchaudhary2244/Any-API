const app = require('./app');
const PORT = 3000;

app.use(require('./routes/index'));

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}...`);
});

module.exports = app;
