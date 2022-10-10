import { newsController } from '../app/controllers/NewsController.js';
import express from 'express';
const router = express.Router();

router.get('/news', newsController.index);

export default { router };