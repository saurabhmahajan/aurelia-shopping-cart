import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {ProductService} from 'services/productService';
import {Cart} from 'cart/cart';

@inject(EventAggregator, ProductService, Cart)
export class List{
    constructor(eventAggregator, productService, cart){
        this.eventAggregator = eventAggregator;
        this.productService = productService;
        this.cart = cart;
    }

    activate(){
        return this.productService.getAll().then(products => 
          this.products = products);
    }

    addToCart(product){
        this.cart.addItem(product);
    }
}