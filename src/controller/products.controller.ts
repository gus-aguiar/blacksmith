import { Request, Response } from 'express';
import productService from '../services/products.service';

const validateBody = (body: Record<string, unknown>): boolean => {
  const { name, price, orderId } = body;
  return Boolean(name && price && orderId);
};

const create = async (req: Request, res: Response): Promise<Response> => {
  const isBodyValid = validateBody(req.body);

  if (!isBodyValid) {
    return res.status(422).json({ message: 'Dados inválidos' });
  }

  const { data, type } = await productService.create(req.body);

  if (type === 'CREATED') {
    return res.status(201).json(data);
  }

  return res.status(500).json(data);
};

const findAll = async (req: Request, res: Response): Promise<Response> => {
  const { data, type } = await productService.findAll();

  if (type === 'OK') {
    return res.status(200).json(data);
  }

  return res.status(500).json(data);
};

export default {
  create,
  findAll,
};