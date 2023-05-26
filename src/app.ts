import express from 'express';
import productController from './controller/products.controller';
import ordersController from './controller/orders.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.create);

app.get('/products', productController.findAll);

app.get('/orders', ordersController.findAll);

export default app;

// initial commit