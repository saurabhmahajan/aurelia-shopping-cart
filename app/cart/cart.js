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

    removeItem(productId){
        this.items.splice(this.items.findIndex((item) => {
            return item.id == productId;
        }), 1);
    }
}