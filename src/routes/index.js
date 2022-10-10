import newsRouter from './news.js';
import siteRouter from './site.js';
import coursesRouter from './courses.js';

function route(app) {
    app.use('/news',newsRouter.router); 
    app.use('/courses',coursesRouter.router); 
    app.use('/',siteRouter.router);
}

export { route };