import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServicesResponse';
import jwtUtil from '../utils/jwtUtil';

type LoginServiceResponse = ServiceResponse<{ token: string }>;

const login = async (username: string, password: string): Promise<LoginServiceResponse> => {
  const user = await UserModel.findOne({ where: { username } });

  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return {
      type: 'UNAUTHORIZED',
      data: {
        message: 'Username or password invalid',
      },
    };
  }

  const token = jwtUtil.sign({ email: user.dataValues.username, id: user.dataValues.id });

  return {
    type: 'OK',
    data: {
      token,
    },
  };
};

export default {
  login,
};