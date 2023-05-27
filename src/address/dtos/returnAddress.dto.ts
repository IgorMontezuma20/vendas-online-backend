import { returnCityDto } from 'src/city/dtos/returnCityDto.dto';
import { AddressEntity } from '../entities/address.entity';

export class ReturnAddressDto {
  complement: string;
  addressNumber: number;
  cep: string;
  city?: returnCityDto;

  constructor(address: AddressEntity) {
    this.complement = address.complement;
    this.addressNumber = address.addressNumber;
    this.cep = address.cep;
    this.city = address.city ? new returnCityDto(address.city) : undefined;
  }
}
