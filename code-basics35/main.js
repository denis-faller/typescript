var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
function isEqual(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}
