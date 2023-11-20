import { Request, Response } from 'express';
import productService from '../services/ProductService';

async function createProduct(req: Request, res: Response) {
  const product = req.body;
  const newProduct = await productService.createNewProduct(product);
  res.status(201).json(newProduct);
}

async function readAllProducts(req: Request, res: Response) {
  const getAllProduct = await productService.readAllProducts();
  return res.status(200).json(getAllProduct.data);
}

export default {
  createProduct,
  readAllProducts,
};