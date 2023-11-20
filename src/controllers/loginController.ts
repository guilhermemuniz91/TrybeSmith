import { Request, Response } from 'express';
import loginService from '../services/loginService';

const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  const { data, status } = await loginService.login(username, password);

  if (status === 'SUCCESSFUL') {
    return res.status(200).json(data);
  }

  return res.status(401).json(data);
};

export default { login };