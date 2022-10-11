
import { Authors } from '../models/Author.js';
import { mongooseToObject } from '../../util/mongooso.js';
import { mutipleMongooseToObject } from '../../util/mongooso.js';



class AuthorController {
    show(req, res, next) {
        Authors.findOne({ name: req.params.name })
            .then(author => {
                res.render('authors/show', { authors: mongooseToObject(author) })
            })
            .catch(next);
    }

    index(req , res, next){
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
        const save = author.save();
        if (save) {
            res.redirect('/authors/index');
        } else {
            res.send('no');
        }
    }
}


const authorController = new AuthorController()
export { authorController };