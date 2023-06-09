import { ReturnStateDto } from '../../state/dtos/returnState.dto';
import { CityEntity } from '../entities/city.entity';

export class returnCityDto {
  name: string;
  state?: ReturnStateDto;

  constructor(city: CityEntity) {
    this.name = city.name;
    this.state = city.state ? new ReturnStateDto(city.state) : undefined;
  }
}
