import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class ProductService{

    constructor(httpClient){
        this.httpClient = httpClient;
    }

    getAll(){
        return this.httpClient.get('./app/services/products.json')
            .then(response => response.content);
    }
}