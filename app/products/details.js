import {inject} from 'aurelia-framework';
import {ProductService} from 'services/productService';
import {Cart} from 'cart/cart';

@inject(ProductService, Cart)
export class Details{
    constructor(productService, cart){
        this.productService = productService;
        this.cart = cart;
    }

    activate(params){
        return this.productService.getById(params.id)
                            .then(product => this.product = product);
    }

    addToCart(){
        this.cart.addItem(this.product);
    }
}