import booksRouter from './books.js';
import authorsRouter from './authors.js';

function route(app) {
    app.use('/books',booksRouter.router); 
    app.use('/authors',authorsRouter.router);
}

export { route };