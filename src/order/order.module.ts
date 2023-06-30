import { OrderEntity } from 'src/order/entities/order.entity';
import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentModule } from '../payment/payment.module';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity]), PaymentModule],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
