export class Cart{
    constructor(){
        this.items = [];
        console.log('Cart constructor');
    }

    addItem(item){
        this.items.push(item);
    }

    getItems(){
       return this.items; 
    }
}