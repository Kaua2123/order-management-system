import { ShoppingCart } from '../class/shopping-cart';

export interface IDiscountStrategy {
  getDiscount(cart: ShoppingCart): number;
}
