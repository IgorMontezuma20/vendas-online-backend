import { AddressEntity } from '../entities/address.entity';

export class ReturnAddressDto {
  complement: string;
  addressNumber: number;
  cep: string;

  constructor(address: AddressEntity) {
    this.complement = address.complement;
    this.addressNumber = address.addressNumber;
    this.cep = address.cep;
  }
}
