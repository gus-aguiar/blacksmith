import { AllOrders, Order } from 'src/types/Order';
import OrderModel from '../database/models/order.model';
import { ServiceResponse } from '../types/ServicesResponse';

type FindAllResponse = ServiceResponse<Order[]>;

async function findAll(): Promise<FindAllResponse> {
  const allOrders = await OrderModel.findAll({
    include: [
      {
        association: 'productIds',
        attributes: ['id'],
      },
    ],
  });

  const dataOrders = allOrders.map((order) => order.dataValues) as AllOrders[];

  const orders = dataOrders.map((order) => ({
    id: order.id,
    userId: order.userId,
    productIds: order.productIds.map((product: { id: number }) => product.id),
  }));
  return { type: 'OK', data: orders };
}

export default {
  findAll,
};