import { authorController } from '../app/controllers/AuthorController.js';
import express from 'express';
const router = express.Router();

router.delete('/:id', authorController.delete);
router.put('/:id', authorController.update);
router.get('/:id/edit', authorController.edit);
router.get('/index', authorController.index);
router.get('/create', authorController.create);
router.post('/store', authorController.store);
router.get('/:id', authorController.show);

export default { router };