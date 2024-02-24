import { ICartItem } from '../interfaces/ICart-item';
import { IDiscountStrategy } from '../interfaces/IDiscount-strategy';
import { DiscountStrategy } from './discount-strategy';

export class ShoppingCart {
  private readonly _items: ICartItem[] = [];
  private _discount: IDiscountStrategy = new DiscountStrategy();

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

  get discount(): IDiscountStrategy {
    return this._discount;
  }

  set discount(discount: IDiscountStrategy) {
    this._discount = discount;
  }
}
