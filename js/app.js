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
var app = new App();




/**
 * Two way data binding tutorial
 */
// For two way data binding
// give input a name 
// and use <span bind="<name>"></span>
// e.g. <input type="text" name="fname">
// <span bind="fname"></span>


/**
 * One way data binding from template to js
 */
// Simply give name attribute to input in template
// that variable will be accessible in app object
// e.g. <input type="text" name="fname">
// e.g. let name = fname;
//

/**
 * Interpolation on app start
 */
// simply use ${var_name} 
// assign same variable in js