class App {
    constructor() {
        this.views();
        this.routes();
    }

    routes() {
        this.router = new Router([
            { component: 'home', active: true },
            { component: 'about' }
        ]);
    }

    views() {
        views.generateViews([
            'header'
        ]);
    }
    view(view) {
        this.router.loadView(view);
        return views.load(view);
    }
}
var views = new Views();
var app = new App();
