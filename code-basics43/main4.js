var Summator = /** @class */ (function () {
    function Summator() {
    }
    Summator.prototype.sum = function (num1, num2) { return num1 + num2; };
    return Summator;
}());
var calculator = new Summator();
calculator.sum(2, 3); // 5
calculator.multiply(2, 3); // Property 'multiply' does not exist on type 'Summator'.
