import { stateMock } from '../../state/__mocks__/state.mock';
import { CityEntity } from '../entities/city.entity';

export const cityMock: CityEntity = {
  id: 1231561,
  stateId: stateMock.id,
  name: 'cityMockedname',
  createdAt: new Date(),
  updatedAt: new Date(),
};
