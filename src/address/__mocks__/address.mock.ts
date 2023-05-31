import { cityMock } from '../../city/__mocks__/city.mock';
import { AddressEntity } from '../entities/address.entity';
import { userEntityMock } from '../../user/__mocks__/user.mock';

export const addressMock: AddressEntity = {
  id: 1321561,
  cep: '352191561',
  cityId: cityMock.id,
  userId: userEntityMock.id,
  complement: 'asfasfasf',
  addressNumber: 16516,
  createdAt: new Date(),
  updatedAt: new Date(),
};
