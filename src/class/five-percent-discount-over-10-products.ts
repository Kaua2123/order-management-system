import { DiscountStrategy } from './discount-strategy';
import { ShoppingCart } from './shopping-cart';

export class FivePercentDiscountOver10Products extends DiscountStrategy {
  protected discount: number = 0.05;
  getDiscount(cart: ShoppingCart): number {
    if (cart.items.length < 10) return cart.total();
    return cart.total() - cart.total() * this.discount;
  }
}
