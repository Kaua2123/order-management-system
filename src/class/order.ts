import { IStatus } from '../interfaces/status-protocol';
import { Logger } from './logger';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: IStatus = 'pending';

  constructor(
    private cart: ShoppingCart,
    private logger: Logger,
  ) {}

  get orderStatus(): IStatus {
    return this._orderStatus;
  }

  closeOrder(): void {
    this._orderStatus = 'closed';
    this.logger.showMsg(
      `Seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido. `,
    );
    this.logger.showMsg(`Status do pedido: ${this._orderStatus}`);
  }
}
