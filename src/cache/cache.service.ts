import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(
    @Inject(CACHE_MANAGER)
    private cacheceManager: Cache,
  ) {}

  async getCache<T>(
    key: string,
    functionRequest: () => Promise<T>,
  ): Promise<T> {
    const allData: T = await this.cacheceManager.get(key);

    if (allData) {
      return allData;
    }

    const cities: T = await functionRequest();

    await this.cacheceManager.set(key, cities);

    return cities;
  }
}
