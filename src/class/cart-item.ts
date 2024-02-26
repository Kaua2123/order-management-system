import { CartItemProtocol } from '../interfaces/cart-item-protocol';

export class CartItem implements CartItemProtocol {
  constructor(
    public name: string,
    public price: number,
  ) {}
}
