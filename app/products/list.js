import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class List{
    constructor(eventAggregator){
        this.eventAggregator = eventAggregator;
        this.products = [];
        for (let i = 0; i < 20; i++) {
            let product = {
                id : i,
                title : `Product ${i + 1}`,
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus tristique augue a luctus. Sed maximus, diam non congue mollis.',
                thumbnailUrl:`https://placeimg.com/250/200/tech?image=${i}`,
                price:Math.floor(Math.random() * 100 + i)
            };

            this.products.push(product);
        }
    }

    addToCart(product){
        this.eventAggregator.publish('addProduct', product);
    }
}