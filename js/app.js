class App {
    constructor() {
        this.views();
        this.routes();
    }
    // Define routes
    // component must be relative to views folder
    // e.g. component: 'home' for home.html
    // e.g. component: 'home/home' for home/home.html
    routes() {
        this.router = new Router([
            { component: 'home', active: true },
            { component: 'about' }
        ]);
    }
    // Define views
    // views must be relative to views folder
    // e.g. header for views/header.html
    views() {
        views.generateViews([
            'header',
            'footer'
        ]);
    }
    // Do not change this
    // Initializing views
    view(view) {
        this.router.loadView(view);
        return views.load(view);
    }
}
const views = new Views();
const app = new App();
