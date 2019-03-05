# Breezy 

Light weight single page application framework. [Demo](https://vvkkumar06.github.io/iBreezy.js)

## Getting Started

Add breezy.js file in your index.html.

### Prerequisites

Create an app.js file attach it below breezy.js in index.html.

### Installing

This is basic configuration of app that can be done.

```
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
```

```

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
```

## Versioning

First version has been released version 1.0.1

## Authors

* **Vivek Kumar** - *Initial work* - [vvkkumar06](https://github.com/vvkkumar06)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

