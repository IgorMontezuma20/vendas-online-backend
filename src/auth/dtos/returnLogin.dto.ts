import { ReturnUserDto } from '../../user/dtos/returnUserDto';

export interface ReturnLogin {
  user: ReturnUserDto;
  accessToken: string;
}
