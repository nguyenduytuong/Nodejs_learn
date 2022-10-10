import newsRouter from './news.js';
import siteRouter from './site.js';
import coursesRouter from './courses.js';

function route(app) {
    app.use('/news',newsRouter.router); 
    app.use('/courses',coursesRouter.router); 
    app.use('/',siteRouter.router);

    app.get('/courses/create', (req, res, next) => {
        res.render('courses/create');
    });

    app.post('/courses/store', (req, res, next) => {
        res.json(req.body);
        // const formData = req.body;
        // const course = new Courses(formData);
        // const save = course.save();
        // // Courses.create(formData)
        // if (save) {
        //     res.send('save');
        // } else {
        //     res.send('no');
        // }
        // .then(course => {

        // })
        // .catch(next)
    });
}

export { route };