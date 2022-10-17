import { booksController } from '../app/controllers/BooksController.js';
import express from 'express';
import multer from 'multer';

const router = express.Router();


const fileStorageEngine = multer.diskStorage({
    destination:(res, file, cb) => {
        cb(null, './src/public/img')
    },
    filename: (req, file, cb) =>{
        cb(null,Date.now() + '--' + file.originalname)
    }
}) 

const upload = multer({storage: fileStorageEngine})


router.put('/:id',upload.single('coverImage'), booksController.update);
router.get('/:id/edit', booksController.edit);
router.delete('/:id', booksController.delete);
router.post('/store',upload.single('coverImage'), booksController.store);
router.get('/create', booksController.create);
router.get('/index', booksController.index);
router.get('/:id', booksController.show);

export default { router };