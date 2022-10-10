
import { Courses } from '../models/Course.js';
// import { MongooseToObject } from '../../util/mongoosoToArray.js';
import { mongooseToObject } from '../../util/mongooso.js';



class CourseController {
    show(req , res, next){
        Courses.findOne({ slug: req.params.slug })
        .then(course => {
            res.render('courses/show', { course: mongooseToObject(course) })
        })
        .catch(next);
    }
}


const courseController = new  CourseController()
export { courseController };