import { PaymentStatusEntity } from '../../payment-status/entities/payment-status.entity';
import { PaymentType } from '../../payment-status/enum/paymentType.enum';
import { PaymentEntity } from '../entities/payment.entity';

export const paymentMock: PaymentEntity = {
  createdAt: new Date(),
  discount: 432,
  finalPrice: 64365.4,
  id: 52358,
  price: 32532.0,
  statusId: PaymentType.Done,
  updatedAt: new Date(),
  type: '',
  orders: [],
  paymentStatus: new PaymentStatusEntity(),
};
