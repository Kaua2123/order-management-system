import { ICartItem } from '../interfaces/ICart-item';

export class CartItem implements ICartItem {
  constructor(
    public name: string,
    public price: number,
  ) {}
}
