export class Cart{
    constructor(){
        this.items = [];
    }

    add(item){
        this.items.push(item);
    }
}