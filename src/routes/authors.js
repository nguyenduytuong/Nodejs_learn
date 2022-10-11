import { authorController } from '../app/controllers/AuthorController.js';
import express from 'express';
const router = express.Router();

router.get('/index', authorController.index);
router.get('/create', authorController.create);
router.post('/store', authorController.store);
router.get('/:name', authorController.show);

export default { router };