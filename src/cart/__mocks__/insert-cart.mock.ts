import { productMock } from '../../product/__mocks__/product.mock';
import { InsertInCartDTO } from '../dtos/insert-cart.dto';

export const insertCartMock: InsertInCartDTO = {
  amount: 535,
  productId: productMock.id,
};
