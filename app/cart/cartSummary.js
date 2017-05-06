import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Cart} from 'cart/cart';

@inject(EventAggregator, Cart)
export class CartSummary{
    constructor(eventAggregator, cart){
        this.eventAggregator = eventAggregator;
        this.cart = cart;
    }

    attached(){
        this.subscriber = this.eventAggregator.subscribe('addProduct', product => {
            this.cart.addItem(product);
        });

        this.eventAggregator.subscribe('removeProduct', product => {
            alert('Removed %s', product.id);
        });
    }

    detached(){
        this.subscriber.dispose();
    }

    getItems(){
       return this.cart.getItems(); 
    }
}