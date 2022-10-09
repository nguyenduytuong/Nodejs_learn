// import { newsRouter } from './news.js';
// const newsRouter = require('./news');
import { Courses } from '../app/models/Course.js';
import { mutipleMongooseToObject } from '../util/mongooso.js';

function route(app) {
    // app.use('/news',newsRouter);


    app.get('/', (req, res, next) => {
        // res.render('home');

        Courses.find({})
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next);
    })

    app.get('/search', (req, res) => {
        res.render('search');
    })
}

export { route };