var SomeClass = /** @class */ (function () {
    function SomeClass(one, two) {
        this.one = one;
        this.two = two;
    }
    Object.defineProperty(SomeClass.prototype, "three", {
        get: function () {
            return "".concat(this.one, " ").concat(this.two);
        },
        enumerable: false,
        configurable: true
    });
    return SomeClass;
}());
