
import { Courses } from '../models/Course.js';
import { mutipleMongooseToObject } from '../../util/mongooso.js';

class SiteController {
    index(req , res, next){
        Courses.find({})
        .then(course => {
            res.render('home', {
                courses: mutipleMongooseToObject(course)
            })
        })
        .catch(next);
    }

    show(req , res){
        res.render('search');
    }
}


const siteController = new  SiteController()
export { siteController };