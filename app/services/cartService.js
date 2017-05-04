export class CartService {
    constructor(){
        this.cart = [];
    }

    getItems(){
        return this.cart;
    }

    add(item){
        this.cart.push(item);
    }
}