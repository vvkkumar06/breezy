class App {
    constructor() {
        this.routes();
    }

    routes() {
        this.router = new Router([
            { component: 'home', active: true },
            { component: 'about' }
        ]);
    }

    view(view) {
        this.router.loadView(view);
    }
}

var app = new App();