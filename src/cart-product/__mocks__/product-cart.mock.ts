import { productMock } from '../../product/__mocks__/product.mock';
import { cartMock } from '../../cart/__mocks__/cart.mock';
import { CartProductEntity } from '../entities/cart-product.entity';

export const cartProductMock: CartProductEntity = {
  id: 1,
  amount: 23165,
  cartId: cartMock.id,
  productId: productMock.id,
  createdAt: new Date(),
  updatedAt: new Date(),
};
