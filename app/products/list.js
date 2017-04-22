import {inject} from 'aurelia-framework';
import {Cart} from 'cart/cart';

@inject(Cart)
export class List{
    constructor(cart){
        this.cart = cart;

        this.products = [];
        for (let i = 0; i < 20; i++) {
            let product = {
                title : `Product ${i + 1}`,
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus tristique augue a luctus. Sed maximus, diam non congue mollis.',
                thumbnailUrl:`https://placeimg.com/250/200/tech?image=${i}`,
                price:Math.floor(Math.random() * 100 + i)
            };

            this.products.push(product);
        }
    }

    addToCart(){
        this.cart.add({});
    }
}