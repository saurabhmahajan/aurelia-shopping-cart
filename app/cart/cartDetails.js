import {inject} from 'aurelia-framework';
import {Cart} from 'cart/cart';

@inject(Cart)
export class CartDetails{
    constructor(cart){
        this.cart = cart;
    }

    removeItem(productId){
        this.cart.removeItem(productId);
    }
}