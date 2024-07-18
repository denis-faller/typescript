var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Triple = /** @class */ (function () {
    function Triple(first, second, third) {
        this.first = first;
        this.second = second;
        this.third = third;
    }
    Triple.prototype.getFirst = function () {
        return this.first;
    };
    Triple.prototype.getSecond = function () {
        return this.second;
    };
    Triple.prototype.getThird = function () {
        return this.third;
    };
    return Triple;
}());
var triple = new Triple(1, 'string', null);
var first = triple.getFirst(); // number
var second = triple.getSecond(); // string
console.log(first);
console.log(second);
var Pair = /** @class */ (function (_super) {
    __extends(Pair, _super);
    function Pair(first, second) {
        return _super.call(this, first, second, undefined) || this;
    }
    Pair.prototype.getFirst = function () {
        return this.first;
    };
    Pair.prototype.getSecond = function () {
        return this.second;
    };
    return Pair;
}(Triple));
function swap(pair) {
    return new Pair(pair.getSecond(), pair.getFirst());
}
var pr = new Pair(1, 'string');
var newPr = swap(pr);
console.log(newPr.getFirst());
console.log(newPr.getSecond());
