import { CartItemCreatorProtocol } from '../interfaces/cart-item-creator-protocol';
import { CartItemProtocol } from '../interfaces/cart-item-protocol';
import { CartItem } from './cart-item';

export class CartItemCreator implements CartItemCreatorProtocol {
  factoryMethod(name: string, price: number): CartItemProtocol {
    const cartItem = new CartItem(name, price);
    return cartItem;
  }
}
