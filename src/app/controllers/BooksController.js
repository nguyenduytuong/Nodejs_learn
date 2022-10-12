
import { Books } from '../models/Book.js';
import { Authors } from '../models/Author.js';
import { mongooseToObject } from '../../util/mongooso.js';
import { mutipleMongooseToObject } from '../../util/mongooso.js';
class BooksController {

    show(req, res, next) {
        Books.findOne({
                _id: req.params.id
            })
            .then(book => {
                res.render('books/show', {
                    books: mongooseToObject(book)
                })
            })
            .catch(next);
    }

    index(req, res, next) {
        Books.find({})
            .then(book => {
                res.render('books/index', {
                    books: mutipleMongooseToObject(book)
                })
            })
            .catch(next);
    }

    async create(req, res, next) {
        const users = await Authors.find({});
        res.render('books/create',{users:users});
    }

    store(req, res, next) {
        res.json(req.body)
        const formData = req.body;
        const books = new Books(formData);
        books.save()
            .then(() => res.redirect('/books/index'))
            .catch(error => {});
    }

    delete(req, res, next) {
        Books.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}
const booksController = new  BooksController()
export { booksController };