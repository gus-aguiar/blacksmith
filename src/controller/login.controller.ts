import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;

  if (!username) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  if (!password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  const { type, data } = await loginService.login(username, password);

  if (type === 'OK') {
    return res.status(200).json(data);
  }
  if (type === 'UNAUTHORIZED') {
    return res.status(401).json(data);
  }
  return res.status(500).json(data);
};

export default {
  login,
};