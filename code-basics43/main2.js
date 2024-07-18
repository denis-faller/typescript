var Summator = /** @class */ (function () {
    function Summator() {
    }
    Summator.prototype.sum = function (num1, num2) { return num1 + num2; };
    // Для параметров будет выведено сообщение: Parameter 'num1'/'num2' implicitly has an 'any' type,
    // потому что TypeScript только проверяет класс на соответствие интерфейсу, но не наследуется от него полноценно
    Summator.prototype.multiply = function (num1, num2) { return num1 * num2; };
    return Summator;
}());
var calculator = new Summator();
// Наш код сработает, как если бы он сработал для аргументов с типом any,
// потому что типы параметров, равно как и все остальное, не были унаследованы классом при реализации интерфейса
console.log(calculator.sum(2, 3)); // 5
