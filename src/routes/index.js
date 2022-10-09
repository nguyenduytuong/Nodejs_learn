// import { newsRouter } from './news.js';
// const newsRouter = require('./news');
import { Courses } from '../app/models/Course.js';
import { mutipleMongooseToObject } from '../util/mongooso.js';
import { MongooseToObject } from '../util/mongoosoToArray.js';

function route(app) {
    // app.use('/news',newsRouter);


    app.get('/', (req, res, next) => {
        Courses.find({})
            .then(course => {
                res.render('home', {
                    courses: mutipleMongooseToObject(course)
                })
            })
            .catch(next);
    })

    app.get('/courses/:slug', (req, res, next) => {
        Courses.findOne({ id: req.params.id })
            .then(course => {
                // res.json(course)
                res.render('courses/show', { course: MongooseToObject(course) })
            })
            .catch(next);
    })

    app.get('/search', (req, res) => {
        res.render('search');
    })
}

export { route };