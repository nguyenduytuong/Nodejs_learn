import newsRouter from './news.js';
import authorsRouter from './authors.js';

function route(app) {
    app.use('/news',newsRouter.router); 
    app.use('/authors',authorsRouter.router);
}

export { route };