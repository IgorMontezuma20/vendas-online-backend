import { Controller } from '@nestjs/common';
import { Roles } from 'src/decorators/rules.decorator';
import { UserType } from 'src/user/enum/user-type.enum';

@Roles(UserType.User)
@Controller('cart')
export class CartController {}
