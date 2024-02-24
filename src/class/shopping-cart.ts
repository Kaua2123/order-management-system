import { ICartItem } from '../interfaces/ICart-item';

export class ShoppingCart {
  private readonly _items: ICartItem[] = [];

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

}
