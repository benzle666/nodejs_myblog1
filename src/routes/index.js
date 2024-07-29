const newsRouter = require('./news');
const siteRouter = require('./site');
const playerRouter = require('./player');
const userRouter = require('./user');

function routes(app) {
    app.use('/videos', playerRouter);
    app.use('/user', userRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = routes;
