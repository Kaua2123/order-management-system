import { DiscountStrategyProtocol } from '../interfaces/discount-strategy-protocol';
import { ShoppingCart } from './shopping-cart';

export class DiscountStrategy implements DiscountStrategyProtocol {
  protected discount = 0;

  getDiscount(cart: ShoppingCart): number {
    return cart.total();
  }
}
