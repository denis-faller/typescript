var Robo = /** @class */ (function () {
    function Robo() {
        this.sayBeep = function () { return 'beep'; };
        this.sayBoop = function () { return 'boop'; };
    }
    return Robo;
}());
var R2D2 = new Robo();
console.log(R2D2.sayBeep()); // 'beep'
