import { categoryMock } from '../../category/__mocks__/category.mock';
import { CreateProductDTO } from '../dtos/createProductDTO.dto';

export const createProduct: CreateProductDTO = {
  categoryId: categoryMock.id,
  image: 'lkfdjsafkldsa',
  name: 'name mock product',
  price: 25.0,
};
