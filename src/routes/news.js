import newsController from '../app/controllers/NewsController';
import express from 'express';
const router = express.Router();

router.get('/news', newsController.index);

export { router };
// module.exports = router;