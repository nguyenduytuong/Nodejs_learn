import { siteController } from '../app/controllers/SiteController.js';
import express from 'express';
const router = express.Router();

router.get('/', siteController.index);

export default { router };