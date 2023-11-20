import ProductModel, 
{ ProductInputtableTypes,
//   ProductSequelizeModel,
} from '../database/models/product.model';
// import { ServiceResponse } from '../types/ServiceResponse';

async function createNewProduct(product: ProductInputtableTypes):
Promise<ProductInputtableTypes> {
  const newProduct = await ProductModel.create(product);
  return newProduct.dataValues; 
}

// async function readAllProducts(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
//   const products = await ProductModel.findAll();

//   return { status: 'SUCCESSFUL', data: products };
// }

export default { 
  createNewProduct, 
//   readAllProducts,
};