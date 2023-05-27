import express from 'express';
import productController from './controller/products.controller';
import ordersController from './controller/orders.controller';
import loginController from './controller/login.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.create);

app.get('/products', productController.findAll);

app.get('/orders', ordersController.findAll);

app.post('/login', loginController.login);

export default app;

// initial commit