// import { newsRouter } from './news.js';
// const newsRouter = require('./news');
import { Courses } from '../app/models/Course.js';

function route(app) {
    // app.use('/news',newsRouter);


    app.get('/', (req, res) => {
        // res.render('home');
        Courses.find({}, function (err, courses) {
            if (!err) res.json(courses);
            // res.status(400).json({ error: 'ERROR!!!!' });
        });

    })

    app.get('/search', (req, res) => {
        res.render('search');
    })
}

export { route };