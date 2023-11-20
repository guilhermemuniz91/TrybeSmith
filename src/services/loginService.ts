import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import jwt from '../middlewares/jwt';

export type LoginServiceResponse = ServiceResponse<{ token: string }>;

async function login(username: string, password: string): Promise<LoginServiceResponse> {
  const user = await UserModel.findOne({ where: { username } });

  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return {
      status: 'UNAUTHORIZED',
      data: {
        message: 'Username or password invalid',
      },
    };
  }

  const token = jwt.signIn({
    username: user.dataValues.username, password: user.dataValues.password });

  return {
    status: 'SUCCESSFUL',
    data: {
      token,
    },
  };
}

export default { login };