import { Request, Response } from 'express';
import orderService from '../services/orders.service';

const findAll = async (req: Request, res: Response): Promise<Response> => {
  const { data, type } = await orderService.findAll();

  if (type === 'OK') {
    return res.status(200).json(data);
  }

  return res.status(500).json(data);
};

export default {
  findAll,
};