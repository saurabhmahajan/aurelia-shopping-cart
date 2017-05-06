import {inject} from 'aurelia-framework';
import {Cart} from 'cart/cart';

@inject(Cart)
export class CartSummary{
    constructor(cart){
        this.cart = cart;
    }

    getItems(){
       return this.cart.getItems(); 
    }
}