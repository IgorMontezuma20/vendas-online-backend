import { ChildEntity, Column, TableInheritance } from 'typeorm';
import { PaymentEntity } from './payment.entity';

@ChildEntity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class PaymentCreditCardEntity extends PaymentEntity {
  @Column({ name: 'amounth_payments', nullable: false })
  amounthPayments: number;
}
