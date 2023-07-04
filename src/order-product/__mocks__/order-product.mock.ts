import { productMock } from '../../product/__mocks__/product.mock';
import { orderMock } from '../../order/__mocks__/order.mock';
import { OrderProductEntity } from '../entities/order-product.entity';
import { ProductEntity } from '../../product/entities/product.entity';
import { OrderEntity } from '../../order/entities/order.entity';

export const orderProductMock: OrderProductEntity = {
  amount: 543,
  createdAt: new Date(),
  id: 45543,
  orderId: orderMock.id,
  price: 543.4,
  productId: productMock.id,
  updatedAt: new Date(),
  orders: new OrderEntity(),
  product: new ProductEntity(),
};
