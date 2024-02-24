import { DiscountStrategy } from './discount-strategy';
import { ShoppingCart } from './shopping-cart';

export class TenPercentDiscountOver100 extends DiscountStrategy {
  protected discount: number = 0.1;
  getDiscount(cart: ShoppingCart): number {
    if (cart.total() < 100) return cart.total();
    return cart.total() - cart.total() * this.discount;
  }
}
