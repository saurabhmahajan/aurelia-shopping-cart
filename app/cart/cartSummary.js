import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Cart} from 'cart/cart';

@inject(EventAggregator, Cart)
export class CartSummary{
    constructor(eventAggregator, cart){
        this.eventAggregator = eventAggregator;
        this.cart = cart;
    }

    getItems(){
       return this.cart.getItems(); 
    }
}