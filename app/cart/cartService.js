export class CartService{
    constructor(){
        this.items = [];
    }

    addItem(item){
        this.items.push(item);
    }

    getItems(){
        return this.items;
    }
}