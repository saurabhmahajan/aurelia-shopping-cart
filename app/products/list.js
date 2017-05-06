import {inject} from 'aurelia-framework';
import {ProductService} from 'services/productService';
import {Cart} from 'cart/cart';

@inject(ProductService, Cart)
export class List{
    constructor(productService, cart){
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