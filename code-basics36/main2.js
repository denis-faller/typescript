var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var p = new Point(10, 8);
p.x; // Property 'x' is private and only accessible within class 'Point'.
p.y; // Property 'y' is private and only accessible within class 'Point'.
