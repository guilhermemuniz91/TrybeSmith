import jwt from 'jsonwebtoken';
import { Login } from '../types/Login';

const secret = process.env.JWT_SECRET || 'notsosecret';

const signIn = (payload: Login): string => {
  const token = jwt.sign(payload, secret);
  return token;
};

export default {
  signIn,
};