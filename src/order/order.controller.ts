import {
  Body,
  Controller,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('/cart/:cartid')
  @UsePipes(ValidationPipe)
  async createOrder(
    @Body()
    createOrderDTO: CreateOrderDTO,
    @Param('cartID') cartId: number,
  ) {
    return this.orderService.createOrder(createOrderDTO, cartId);
  }
}
