import {inject} from 'aurelia-framework';
import {ProductService} from 'services/productService';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(ProductService, EventAggregator)
export class Details{
    constructor(productService, eventAggregator){
        this.productService = productService;
        this.eventAggregator = eventAggregator;
    }

    activate(params){
        this.productService.getById(params.id)
                            .then(product => this.product = product);
    }

    addToCart(){
        this.publisher = this.eventAggregator.publish('addProduct', this.product);
    }
}