interface ICalculate {
  sum: (num1: number, num2: number ) => number;
}

class Summator implements ICalculate {
  sum(num1, num2) { return num1 + num2; }
  // Для параметров будет выведено сообщение: Parameter 'num1'/'num2' implicitly has an 'any' type,
  // потому что TypeScript только проверяет класс на соответствие интерфейсу, но не наследуется от него полноценно

  multiply(num1: number, num2: number) { return num1 * num2; }
  // Мы добавили новый метод, но TypeScript не ругается
}

let calculator = new Summator();
  // Наш код сработает, как если бы он сработал для аргументов с типом any,
  // потому что типы параметров, равно как и все остальное, не были унаследованы классом при реализации интерфейса
console.log(calculator.sum(2,3)); // 5