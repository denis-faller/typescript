interface ICalculate {
  sum: (num1: number, num2: number) => number;
  multiply? : (num1: number, num2: number) => number;
}

class Summator implements ICalculate {
  sum (num1: number, num2: number) { return num1 + num2; }
}

const calculator = new Summator();
calculator.sum(2,3) // 5
calculator.multiply(2,3) // Property 'multiply' does not exist on type 'Summator'.