import { IDiscountStrategy } from '../interfaces/IDiscount-strategy';
import { ShoppingCart } from './shopping-cart';

export class DiscountStrategy implements IDiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ShoppingCart): number {
    return cart.total();
  }
}
