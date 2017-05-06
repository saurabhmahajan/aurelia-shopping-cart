import {inject} from 'aurelia-framework';
import {Cart} from 'cart/cart';

@inject(Cart)
export class CartDetails{
    constructor(cart){
        this.cart = cart;
        console.log(cart);
        this.message = `Cart has ${this.cart.getItems().length} items`;
    }
}