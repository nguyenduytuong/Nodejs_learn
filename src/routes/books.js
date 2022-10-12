import { booksController } from '../app/controllers/BooksController.js';
import express from 'express';
const router = express.Router();


router.delete('/:id', booksController.delete);
router.post('/store', booksController.store);
router.get('/create', booksController.create);
router.get('/index', booksController.index);
router.get('/:id', booksController.show);

export default { router };