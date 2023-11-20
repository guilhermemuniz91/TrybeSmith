import { Request, Response } from 'express';
import orderService from '../services/orderService';

async function readAllOrders(req: Request, res: Response) {
  const readOrders = await orderService.readAllOrders();
  
  return res.status(200).json(readOrders.data);
}

export default {
  readAllOrders,
};