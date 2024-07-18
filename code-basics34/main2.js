var Point = /** @class */ (function () {
    // Возвращаемый тип не указывается, так как это конструктор
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Point.prototype, "inspect", {
        get: function () {
            return "(".concat(this.x, ", ").concat(this.y, ")");
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var p = new Point(2, 5);
// Свойство есть, а поля такого нет
console.log(p.inspect); // (2, 5)
