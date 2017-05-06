export class App{
    constructor(){
        this.message = "Hello from Aurelia!";   
    }

    configureRouter(config, router){
        this.router = router;
        config.map([
            { route:['', 'list'], moduleId: 'products/list', nav:true, title : 'List' },
            { route:['about'], moduleId:'about/about', nav:true, title: 'About' },
            { route:'products/details/:id', moduleId:'products/details', name:'details'},
            { route:'cart/cartDetails', moduleId:'cart/cartDetails', name:'cartDetails'}
        ]);
    }
}