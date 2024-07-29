// Myblog project demo the use of Nodejs (MVC, middleware,)
// Soft delete mongoose-delele lib is deprecated please put a deleted field in Model to handle this concept

const express = require('express');
const morgan = require('morgan');
const app = express();
const methodOverride = require('method-override');
const port = 3000;
const handlebars = require('express-handlebars').engine;
const path = require('path');

const SortMiddleware = require('./app/middlewares/sortMiddleware');

const routes = require('./routes');
const db = require('./config/db');

// Connect DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Custum middleware
app.use(SortMiddleware);

// Method overwrite
app.use(methodOverride('_method'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: require('./helpers/handlebars'),
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Http logger
app.use(morgan('combined'));

// Routes init
routes(app);

app.listen(port, () => console.log('Server is running on port: ', port));
