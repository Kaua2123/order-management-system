import { ShoppingCart } from '../class/shopping-cart';

export interface DiscountStrategyProtocol {
  getDiscount(cart: ShoppingCart): number;
}
