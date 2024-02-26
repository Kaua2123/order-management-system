import { ICartItem } from '../interfaces/cart-item-protocol';
import { DiscountStrategyProtocol } from '../interfaces/discount-strategy-protocol';
import { DiscountStrategy } from './discount-strategy';

export class ShoppingCart {
  private readonly _items: ICartItem[] = [];
  private _discount: DiscountStrategyProtocol = new DiscountStrategy();

  addItem(...items: ICartItem[]): void {
    items.forEach((item) => this._items.push(item));
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): ICartItem[] {
    return this._items;
  }

  total(): number {
    return this._items.reduce((acc, value) => acc + value.price, 0);
  }

  totalWithDiscount(): number {
    return this._discount.getDiscount(this);
  }

  get discount(): DiscountStrategyProtocol {
    return this._discount;
  }

  set discount(discount: DiscountStrategyProtocol) {
    this._discount = discount;
  }
}
