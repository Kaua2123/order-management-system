import { DiscountObserverProtocol } from '../interfaces/discount-observer-protocol';
import { ShoppingCartObservableProtocol } from '../interfaces/shopping-cart-observable-protocol';
import { ShoppingCart } from './shopping-cart';

export class ShoppingCartObservable implements ShoppingCartObservableProtocol {
  discountObservers: DiscountObserverProtocol[] = [];

  constructor(public cart: ShoppingCart) {}
  subscribe(...discountObserver: DiscountObserverProtocol[]): void {
    discountObserver.forEach((observer) => {
      if (!this.discountObservers.includes(observer)) {
        this.discountObservers.push(observer);
      }
    });
  }

  unsubscribe(discountObserver: DiscountObserverProtocol): void {
    const observerIndex = this.discountObservers.indexOf(discountObserver);

    if (observerIndex === -1) {
      this.discountObservers.splice(observerIndex, 1);
    }
  }

  notify(): void {
    this.discountObservers.forEach((observer) => observer.update(this));
  }
}
