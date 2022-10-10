import { courseController } from '../app/controllers/CourseController.js';
import express from 'express';
const router = express.Router();


router.get('/:slug', courseController.show);

export default { router };