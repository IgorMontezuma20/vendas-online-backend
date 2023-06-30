import { ChildEntity, Column, TableInheritance } from 'typeorm';
import { PaymentEntity } from './payment.entity';
import { CreateOrderDTO } from '../../order/dtos/create-order.dto';

@ChildEntity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class PaymentPixEntity extends PaymentEntity {
  @Column({ name: 'code', nullable: false })
  code: string;

  @Column({ name: 'date_payment', nullable: false })
  paymentDate: Date;

  constructor(
    statusId: number,
    price: number,
    discount: number,
    finalPrice: number,
    createOrderDTO: CreateOrderDTO,
  ) {
    super(statusId, price, discount, finalPrice);
    this.code = createOrderDTO?.codePix || '';
    this.paymentDate = new Date(createOrderDTO?.datePayment || '');
  }
}
