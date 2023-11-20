import { ServiceResponse } from '../types/ServiceResponse';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { OrderResponse } from '../types/OrderResponse';

async function readAllOrders():Promise<ServiceResponse<OrderResponse[]>> {
  const promise = await OrderModel.findAll({
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    }],
  });

  const allOrders = promise.map(({ dataValues }) => ({
    id: dataValues.id,
    userId: dataValues.userId,
    productIds: dataValues.productIds?.map((product) => product.id),
  }));

  return { status: 'SUCCESSFUL', data: allOrders };
}

export default {
  readAllOrders,
};