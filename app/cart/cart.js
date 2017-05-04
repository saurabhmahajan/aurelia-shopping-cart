import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Cart{
    constructor(eventAggregator){
        this.eventAggregator = eventAggregator;
        this.items = [];
    }

    attached(){
        this.subscriber = this.eventAggregator.subscribe('addProduct', product => {
            this.items.push(product);
        });

        this.eventAggregator.subscribe('removeProduct', product => {
            alert('Removed %s', product.id);
        });
    }

    detached(){
        this.subscriber.dispose();
    }

    getItems(){
       return this.items; 
    }
}