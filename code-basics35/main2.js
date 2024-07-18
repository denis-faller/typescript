var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.isEqual = function (p2) {
        return this.x === p2.x && this.y === p2.y;
    };
    return Point;
}());
var point = new Point(1, 2);
point.isEqual(new Point(10, 1)); // OK
point.isEqual({ x: 1, y: 2 }); // Error: Argument of type '{ x: number; y: number; }' is not assignable to parameter of type 'Point'.
