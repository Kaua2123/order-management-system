import { CartItemCreator } from './class/cart-item-creator';
import { DiscountObserver } from './class/discount-observer';
import { Logger } from './class/logger';
import { Order } from './class/order';
import { ShoppingCart } from './class/shopping-cart';
import { ShoppingCartObservable } from './class/shopping-cart-observable';
import { TenPercentDiscountOver100 } from './class/ten-percent-discount-over-100';

const shoppingCart = new ShoppingCart();
const logger = new Logger();

// sem factorys
// const item1 = new CartItem('Tigela', 20);
// const item2 = new CartItem('Caneca', 15.5);
// const item3 = new CartItem('Kit-kat', 7.5);
// const item4 = new CartItem('Teclado Mecânico', 58.5);

// Factory Method
const cartItemCreator = new CartItemCreator();
const item1 = cartItemCreator.factoryMethod('Tigela', 20);
const item2 = cartItemCreator.factoryMethod('Caneca', 15.5);
const item3 = cartItemCreator.factoryMethod('Kit-kat', 7.5);
const item4 = cartItemCreator.factoryMethod('Teclado Mecânico', 58.5);

shoppingCart.addItem(item1, item2, item3, item4);

console.log(shoppingCart.items);

console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());

shoppingCart.discount = new TenPercentDiscountOver100();
console.log(shoppingCart.discount);
console.log(shoppingCart.totalWithDiscount());

const order = new Order(shoppingCart, logger);
order.closeOrder();

const shoppingCartObservable = new ShoppingCartObservable(shoppingCart);
const discountObserver = new DiscountObserver();
shoppingCartObservable.subscribe(discountObserver);
console.log(shoppingCartObservable.discountObservers);
shoppingCartObservable.notify();
