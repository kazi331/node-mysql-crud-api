import express from 'express';
import { add, books, fetchItem, remove, update } from '../controllers/books.js';

const Router = express.Router();

Router.get('/', books);

Router.post('/add', add);
Router.put('/update/:id', update);
Router.delete('/remove/:id', remove);
Router.get('/update/:id', fetchItem);


export default Router;