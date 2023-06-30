import { returnCityDto } from '../../city/dtos/returnCityDto.dto';
import { AddressEntity } from '../entities/address.entity';

export class ReturnAddressDto {
  id: number;
  complement: string;
  addressNumber: number;
  cep: string;
  city?: returnCityDto;

  constructor(address: AddressEntity) {
    this.id = address.id;
    this.complement = address.complement;
    this.addressNumber = address.addressNumber;
    this.cep = address.cep;
    this.city = address.city ? new returnCityDto(address.city) : undefined;
  }
}
