
import { Courses } from '../models/Course.js';
// import { MongooseToObject } from '../../util/mongoosoToArray.js';
import { mongooseToObject } from '../../util/mongooso.js';



class CourseController {
    show(req, res, next) {
        Courses.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        const formData = req.body;
        const course = new Courses(formData);
        const save = course.save();
        if (save) {
            res.send('save');
        } else {
            res.send('no');
        }
    }
}


const courseController = new CourseController()
export { courseController };