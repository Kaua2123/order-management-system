import { DiscountObserverProtocol } from './discount-observer-protocol';

export interface ShoppingCartObservableProtocol {
  discountObservers: DiscountObserverProtocol[];

  subscribe(discountObserver: DiscountObserverProtocol): void;
  unsubscribe(discountObserver: DiscountObserverProtocol): void;
  notify(): void;
}
