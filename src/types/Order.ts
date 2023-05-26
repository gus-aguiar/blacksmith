import { ProductId } from './Product';

export type Order = {
  id: number;
  userId: number;
  productId?: number;
};

export type AllOrders = {
  id: number;
  userId: number;
  productIds: ProductId[];
};
