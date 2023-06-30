import { ChildEntity, Column, TableInheritance } from 'typeorm';
import { PaymentEntity } from './payment.entity';
import { CreateOrderDTO } from '../../order/dtos/create-order.dto';

@ChildEntity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class PaymentCreditCardEntity extends PaymentEntity {
  @Column({ name: 'amount_payments', nullable: false })
  amountPayments: number;

  constructor(
    statusId: number,
    price: number,
    discount: number,
    finalPrice: number,
    createOrderDTO: CreateOrderDTO,
  ) {
    super(statusId, price, discount, finalPrice);
    this.amountPayments = createOrderDTO?.amountPayments || 0;
  }
}
