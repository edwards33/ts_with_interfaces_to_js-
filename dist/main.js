"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var second_1 = require("./second");
var App = /** @class */ (function () {
    function App() {
        this.title = 'Some Title';
        console.log('App is running!');
    }
    App.prototype.getNames = function () {
        return [{ name: this.title }];
    };
    return App;
}());
var app = new App();
new second_1.Second();
console.log(app.getNames()[0].name);
