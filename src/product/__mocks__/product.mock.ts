import { categoryMock } from '../../category/__mocks__/category.mock';
import { ProductEntity } from '../entities/product.entity';

export const productMock: ProductEntity = {
  categoryId: categoryMock.id,
  id: 7435,
  image: 'http://image.com',
  name: 'product name',
  price: 34.3,
  createdAt: new Date(),
  updatedAt: new Date(),
};
