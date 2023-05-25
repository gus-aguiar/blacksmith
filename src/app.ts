import express from 'express';
import productController from './controller/products.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.create);

app.get('/products', productController.findAll);

export default app;

// initial commit