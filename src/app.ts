import express from 'express';
import productController from './controller/products.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.create);

export default app;

// initial commit