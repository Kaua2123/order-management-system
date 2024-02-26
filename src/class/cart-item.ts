import { ICartItem } from '../interfaces/cart-item-protocol';

export class CartItem implements ICartItem {
  constructor(
    public name: string,
    public price: number,
  ) {}
}
