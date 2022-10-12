import { Authors } from '../models/Author.js';
import { mongooseToObject } from '../../util/mongooso.js';
import { mutipleMongooseToObject } from '../../util/mongooso.js';



class AuthorController {
    show(req, res, next) {
        Authors.findOne({
                _id: req.params.id
            })
            .then(author => {
                res.render('authors/show', {
                    authors: mongooseToObject(author)
                })
            })
            .catch(next);
    }

    index(req, res, next) {
        Authors.find({})
            .then(author => {
                res.render('authors/index', {
                    authors: mutipleMongooseToObject(author)
                })
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('authors/create');
    }

    store(req, res, next) {
        const formData = req.body;
        const author = new Authors(formData);
        author.save()
            .then(() => res.redirect('/authors/index'))
            .catch(error => {});
    }
    edit(req, res, next) {
        Authors.findById(req.params.id)
            .then(author =>
                res.render('authors/edit', {
                    authors: mongooseToObject(author)
                })
            )
            .catch(next)
    }

    update(req, res, next) {
        // res.json(req.body)
        Authors.updateOne({ id: req.params.id }, req.body)
            .then(() => res.redirect('/authors/index'))
            .catch(next);
    }

    delete(req, res, next) {
        Authors.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}


const authorController = new AuthorController()
export {
    authorController
};