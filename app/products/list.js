import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {ProductService} from 'services/productService';


@inject(EventAggregator, ProductService)
export class List{
    constructor(eventAggregator, productService){
        this.eventAggregator = eventAggregator;
        this.productService = productService;
    }

    activate(){
        return this.productService.getAll().then(products => 
          this.products = products);
    }

    addToCart(product){
        this.eventAggregator.publish('addProduct', product);
    }
}