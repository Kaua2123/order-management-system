import { CartItem } from './class/cart-item';
import { ShoppingCart } from './class/shopping-cart';
import { TenPercentDiscountOver100 } from './class/ten-percent-discount-over-100';

const shoppingCart = new ShoppingCart();
const item1 = new CartItem('Tigela', 20);
const item2 = new CartItem('Caneca', 15.5);
const item3 = new CartItem('Kit-kat', 7.5);
const item4 = new CartItem('Teclado Mecânico', 58.5);
shoppingCart.addItem(item1, item2, item3, item4);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
shoppingCart.discount = new TenPercentDiscountOver100();
console.log(shoppingCart.discount);
console.log(shoppingCart.totalWithDiscount());
