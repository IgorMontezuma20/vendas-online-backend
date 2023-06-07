import { UpdatePasswordDTO } from '../dtos/update-password.dto';

export const updatePasswordMock: UpdatePasswordDTO = {
  lastPassword: 'abc',
  newPassword: 'newPassword',
};

export const updateInvalidPasswordMock: UpdatePasswordDTO = {
  lastPassword: 'wrongLastPassword',
  newPassword: 'newPassword',
};
