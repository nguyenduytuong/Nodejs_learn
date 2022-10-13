
import { Books } from '../models/Book.js';
import { Authors } from '../models/Author.js';
import { mongooseToObject } from '../../util/mongooso.js';
import { mutipleMongooseToObject } from '../../util/mongooso.js';
import mongoose from 'mongoose';
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
         await Authors.find({})
        .then(user => {
            res.render('books/create',{ users:mutipleMongooseToObject(user) });
        })
        .catch(next)
    }

    store(req, res, next) {
        const formData = req.body;
        formData.coverImage = req.file.filename
        const books = new Books(formData);
        books.save()
            .then(() => res.redirect('/books/index'))
            .catch(error => {});
    }

    async edit(req, res, next) {
        Books.findById(req.params.id)
        // const user = await Authors.find({})
            .then(book =>
                // res.json(user)
                res.render('books/edit', {
                    books: mongooseToObject(book),
                    // users: mutipleMongooseToObject(user)
                })
            )
            .catch(next)
    }

    update(req, res, next) {
        const ObjectId = mongoose.Types.ObjectId;
        const id = req.params.id.trim();
        Books.updateOne({ '_id':new ObjectId(id) }, req.body)
            .then(() => res.redirect('/books/index'))
            .catch(next);
    }

    delete(req, res, next) {
        Books.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}
const booksController = new  BooksController()
export { booksController };