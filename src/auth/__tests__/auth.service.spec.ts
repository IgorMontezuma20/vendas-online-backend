import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../user/user.service';
import { userEntityMock } from '../../user/__mocks__/user.mock';
import { JwtService } from '@nestjs/jwt';
import { jwtMock } from '../__mocks__/jwt.mock';
import { loginUserMock } from '../__mocks__/login-user.mock';
import { ReturnUserDto } from '../../user/dtos/returnUserDto';
import { AuthService } from '../auth.service';

describe('AddressService', () => {
  let service: AuthService;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserService,
          useValue: {
            findUserByEmail: jest.fn().mockResolvedValue(userEntityMock),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: () => jwtMock,
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userService).toBeDefined();
  });

  it('should be return user if password and email are provided', async () => {
    const user = await service.login(loginUserMock);

    expect(user).toEqual({
      acessToken: jwtMock,
      user: new ReturnUserDto(userEntityMock),
    });
  });

  it('should be return user if password and email are invalid', async () => {
    jest.spyOn(userService, 'findUserByEmail').mockResolvedValue(undefined);

    expect(service.login(loginUserMock)).rejects.toThrowError();
  });

  it('should return an error in UserService', async () => {
    jest.spyOn(userService, 'findUserByEmail').mockRejectedValue(new Error());

    expect(service.login(loginUserMock)).rejects.toThrowError();
  });
});
