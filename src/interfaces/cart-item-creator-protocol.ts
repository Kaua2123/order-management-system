import { CartItemProtocol } from './cart-item-protocol';

export interface CartItemCreatorProtocol {
  factoryMethod(name: string, price: number): CartItemProtocol;
}
