import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartProductEntity } from './entities/cart-product.entity';
import { Repository } from 'typeorm';
import { InsertInCartDTO } from '../cart/dtos/insert-cart.dto';
import { CartEntity } from '../cart/entities/cart.entity';

@Injectable()
export class CartProductService {
  constructor(
    @InjectRepository(CartProductEntity)
    private readonly cartProductRepository: Repository<CartProductEntity>,
  ) {}

  async verifyProductInCart(
    productId: number,
    cartId: number,
  ): Promise<CartProductEntity> {
    const cartProduct = await this.cartProductRepository.findOne({
      where: {
        productId,
        cartId,
      },
    });

    if (!cartProduct) {
      throw new NotFoundException('Product not found in cart.');
    }

    return cartProduct;
  }

  async createProductInCart(
    insertInCartDTO: InsertInCartDTO,
    cartId: number,
  ): Promise<CartProductEntity> {
    return this.cartProductRepository.save({
      amount: insertInCartDTO.amount,
      productId: insertInCartDTO.productId,
      cartId,
    });
  }

  async insertProdutInCart(
    insertInCartDTO: InsertInCartDTO,
    cart: CartEntity,
  ): Promise<CartProductEntity> {
    const cartProduct = await this.verifyProductInCart(
      insertInCartDTO.productId,
      cart.id,
    ).catch(() => undefined);

    if (!cartProduct) {
      return this.createProductInCart(insertInCartDTO, cart.id);
    }

    return this.cartProductRepository.save({
      ...cartProduct,
      amount: cartProduct.amount + insertInCartDTO.amount,
    });
  }
}
