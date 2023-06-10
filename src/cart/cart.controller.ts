import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Roles } from 'src/decorators/rules.decorator';
import { UserType } from 'src/user/enum/user-type.enum';
import { InsertInCartDTO } from './dtos/insert-cart.dto';
import { CartService } from './cart.service';
import { UserId } from 'src/decorators/user-id.decorator';
import { ReturnCartDTO } from './dtos/return-cart.dto';

@Roles(UserType.User, UserType.Admin)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createCart(
    @Body() insertCart: InsertInCartDTO,
    @UserId() userId: number,
  ): Promise<ReturnCartDTO> {
    return new ReturnCartDTO(
      await this.cartService.insertProductInCart(insertCart, userId),
    );
  }
}
