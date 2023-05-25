import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServicesResponse';
import ProductModel from '../database/models/product.model';

type CreateProductInput = Omit<Product, 'id' >;
type CreateProductResponse = ServiceResponse<{ id: number, name:string, price:string }>;

const create = async (input: CreateProductInput): Promise<CreateProductResponse> => {
  const { name, price, orderId } = input;

  const created = await ProductModel.create({
    name,
    price,
    orderId,
  });

  return {
    type: 'CREATED',
    data: {
      id: created.dataValues.id,
      name: created.dataValues.name,
      price: created.dataValues.price,
    },
  };
};

export default {
  create,
};