import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServicesResponse';
import ProductModel from '../database/models/product.model';

type CreateProductInput = Omit<Product, 'id' >;
type CreateProductResponse = ServiceResponse<{ id: number, name:string, price:string }>;
type FindAllResponse = ServiceResponse<Product[]>;

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

const findAll = async (): Promise<FindAllResponse> => {
  const products = await ProductModel.findAll();

  return {
    type: 'OK',
    data: products.map((product) => ({
      id: product.dataValues.id,
      name: product.dataValues.name,
      price: product.dataValues.price,
      orderId: product.dataValues.orderId,
    })),
        
  };
};

export default {
  create,
  findAll,
};