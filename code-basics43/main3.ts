interface ICalculate {
  sum: (num1: number, num2: number ) => number;
}

class Summator implements ICalculate {
  sum (num1: string, num2: string) { return num1 + num2 };
  // Мы изменили типы аргументов на string, то есть неверно реализовали интерфейс
  // В таком случае TypeScript обратит внимание на нашу ошибку и не скомпилируется:
  // Type '(num1: string, num2: string) => string' is not assignable to type '(num1: number, num2: number) => number'.
}