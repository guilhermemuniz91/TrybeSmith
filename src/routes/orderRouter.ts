import { Router } from 'express';
import orderController from '../controllers/orderController';

const orderRouter = Router();

orderRouter.get('/', orderController.readAllOrders);

export default orderRouter;