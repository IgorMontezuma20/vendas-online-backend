import { ChildEntity, Column, TableInheritance } from 'typeorm';
import { PaymentEntity } from './payment.entity';

@ChildEntity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class PaymentPixEntity extends PaymentEntity {
  @Column({ name: 'code', nullable: false })
  code: number;

  @Column({ name: 'payment_date', nullable: false })
  paymentDate: Date;
}
