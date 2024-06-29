type User = {
  firstName: string;
  age: number;
}

function foo1({ firstName, age }: User) {
  console.log(firstName, age);
}

// Обычное определение
function foo2(point: number[]) {
  console.log(point);
}

// Деструктурированный массив
function foo3([x, y]: number[]) {
  console.log(x, y);
}

type Point = number[];

// С псевдонимом
function foo4([x, y]: Point) {
  console.log(x, y);
}