import { newsController } from '../app/controllers/BooksController.js';
import express from 'express';
const router = express.Router();

router.get('/news', newsController.index);

export default { router };