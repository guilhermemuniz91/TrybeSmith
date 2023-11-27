import { ProductInputtableTypes } from '../../src/database/models/product.model';
import { Product } from '../../src/types/Product';

const mockedProduct: ProductInputtableTypes = {
    "name": "Muramasa",
    "price": "100 peças de ouro",
    "orderId": 5
  }

  const mockedProductWithId: Product = {
    "id": 10,
    "name": "Muramasa",
    "price": "100 peças de ouro",
    "orderId": 5
  }

  const mockedInvalidProduct: ProductInputtableTypes = {
    "id": 1,
    "name": "",
    "price": "30 peças de ouro",
    "orderId": 4
  }

  const mockedOrder = [
    {
      id: 1,
      userId: 1,
    },
    {
      id: 2,
      userId: 2,
    },
  ];

  export default {
    mockedProduct,
    mockedProductWithId,
    mockedInvalidProduct,
    mockedOrder,
  };