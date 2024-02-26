import { DiscountObserverProtocol } from '../interfaces/discount-observer-protocol';
import { ShoppingCartObservable } from './shopping-cart-observable';

export class DiscountObserver implements DiscountObserverProtocol {
  update(observable: ShoppingCartObservable): void {
    if (observable.cart.total() !== observable.cart.totalWithDiscount()) {
      console.log('NOTIFICAÇÃO OBSERVER: HÁ PROMOÇÕES');
    }
  }
}
