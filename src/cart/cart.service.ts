import { CartProductService } from './../cart-product/cart-product.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';
import { Repository } from 'typeorm';
import { InsertInCartDTO } from './dtos/insert-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
    private readonly cartProductService: CartProductService,
  ) {}

  async verifyActiveCart(userId: number): Promise<CartEntity> {
    const cart = await this.cartRepository.findOne({
      where: {
        userId,
      },
    });

    if (!cart) {
      throw new NotFoundException('Active cart not found');
    }

    return cart;
  }

  async createCart(userId: number): Promise<CartEntity> {
    return this.cartRepository.save({
      active: true,
      userId,
    });
  }

  async insertProductInCart(
    insertCartDTO: InsertInCartDTO,
    userId: number,
  ): Promise<CartEntity> {
    const cart = await this.verifyActiveCart(userId).catch(async () => {
      return this.createCart(userId);
    });

    await this.cartProductService.insertProdutInCart(insertCartDTO, cart);

    return cart;
  }
}
