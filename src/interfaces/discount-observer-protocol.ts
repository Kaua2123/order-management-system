import { ShoppingCartObservableProtocol } from './shopping-cart-observable-protocol';

export interface DiscountObserverProtocol {
  update(cartObservable: ShoppingCartObservableProtocol): void;
}
