import { Router } from 'express';
import productController from '../controllers/ProductController';

const productRouter = Router();

productRouter.post('/', productController.createProduct);
productRouter.get('/', productController.readAllProducts);

export default productRouter;