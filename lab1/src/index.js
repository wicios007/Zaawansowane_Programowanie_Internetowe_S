"use strict";
//zadanie 1
// function hello() {
//     console.log("Hello typescript");
// }
// hello();
exports.__esModule = true;
exports.Zad4 = void 0;
//zad 4
var Zad4 = /** @class */ (function () {
    function Zad4(element) {
        this.counter = 0;
        this.element = element;
        this.element.innerHTML = "Increment or decrement";
        this.form = document.createElement("form");
        this.input = document.createElement("input");
        this.add = document.createElement("button");
        this.sub = document.createElement("button");
        this.element.appendChild(this.form);
        this.form.appendChild(this.input);
        this.form.appendChild(this.add);
        this.form.appendChild(this.sub);
        this.add.innerHTML = "+";
        this.sub.innerHTML = "-";
    }
    Zad4.prototype.incordecr = function () {
        var _this = this;
        this.add.addEventListener("click", function (e) {
            e.preventDefault();
            _this.counter += 1;
            _this.input.value = _this.counter.toString();
        });
        this.sub.addEventListener("click", function (e) {
            e.preventDefault();
            _this.counter -= 1;
            _this.input.value = _this.counter.toString();
        });
    };
    return Zad4;
}());
exports.Zad4 = Zad4;
window.onload = function () {
    var el = document.getElementById('content');
    var zad4 = new Zad4(el);
    zad4.incordecr();
};
