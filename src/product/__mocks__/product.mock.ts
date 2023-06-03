import { categoryMock } from '../../category/__mocks__/category.mock';
import { ProductEntity } from '../entities/product.entity';

export const productMocK: ProductEntity = {
  categoryId: categoryMock.id,
  id: 21561,
  name: 'name product mock',
  price: 34.3,
  image: 'ttp://image.com',
  createdAt: new Date(),
  updatedAt: new Date(),
};
