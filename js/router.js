class Router {
    constructor(routes) {
        this.page = '';
        this.app = document.getElementById('app');
        this.views = './views/';
        this.routes = routes;
        this.init();
    }

    init() {

        onload = (event) => this.changePage();
        onhashchange = (event) => { this.changePage(); views.bindInputs(); };
    }

    changePage() {
        this.page = event.target.location.hash;
        let newPage = this.routes.find(el => el.component == this.page.replace('#', ''));
        if (newPage && this.page === '#' + newPage.component) {
            this.loadPage(newPage.component + '.html')
                .then(data => {
                    this.app.innerHTML = eval('`' + data + '`');
                    location.hash = '#' + newPage.component;
                });
        } else {
            let defaultPage = this.routes.find(el => el.active).component;
            location.hash = '#' + defaultPage;
        }
    }

    /**
     * Function to load page
     * @param {string} theUrl 
     * @param {function} callback 
     */
    loadPage(theUrl) {
        return new Promise((resolve, reject) => {
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    resolve(eval('`' + xmlHttp.responseText + '`'));
            }
            xmlHttp.open("GET", this.views + theUrl, true); // true for asynchronous 
            xmlHttp.send(null);
        });
    }

    loadView(view) {
        this.loadPage(view + '.html')
            .then(data => {
                document.getElementById(view).innerHTML = data;
            });
    }
}

class HTTP {
    constructor() { }
    get(url, callback) {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", url, true); // true for asynchronous 
        xmlHttp.send(null);
    }

    post(url, body, callback) {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("POST", url, true); // true for asynchronous 
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send(body);
    }
}

class Views {
    constructor() {
    }
    generateViews(views) {
        views.forEach(view => {
            this[`${view}`] = `<div id="${view}"></div>`;
        });
    }
    load(view) {
        return this[`${view}`];
    }

    bindInputs() {
        // template to javascript input binding
        setTimeout(() => {
            this.bindCheckBox();
            this.bindElements('input');
            this.bindElements('select');
            this.bindElements('textarea');
        }, 1000);
    }

    bindElements(type) {
        let inputs = document.getElementsByTagName(type);
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].oninput = (event) => {
               app[event.target.name]  = event.target.value;
               try {
                   let bindElement = document.querySelector(`[bind=${event.target.name}]`);
                   if(bindElement) {
                       bindElement.innerHTML = event.target.value;
                   }
               } catch(ex) {
               }
            };
        }
    }
    bindCheckBox(){
        let inputs = document.querySelectorAll('input[type=checkbox]');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].onchange = (event) => {
               app[event.target.name]  = event.srcElement.checked;
               try {
                   let bindElement = document.querySelector(`[bind=${event.target.name}]`);
                   if(bindElement) {
                       bindElement.innerHTML = event.srcElement.checked;
                   }
               } catch(ex) {
               }
            };
        }
    }
}