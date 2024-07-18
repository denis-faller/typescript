class Triple<T, U, V> {
  constructor(protected first: T, protected second: U, protected third: V) {}

  getFirst(): T {
    return this.first;
  }

  getSecond(): U {
    return this.second;
  }

  getThird(): V {
    return this.third;
  }
}

const triple = new Triple(1, 'string', null);
const first = triple.getFirst(); // number
const second = triple.getSecond(); // string

console.log(first);
console.log(second);

class Pair<T, U> extends Triple<T, U, never> {
  constructor(first: T, second: U) {
    super(first, second, undefined as never);
  }

  getFirst(): T {
    return this.first;
  }

  getSecond(): U {
    return this.second;
  }
}

function swap<T, U>(pair: Pair<T, U>): Pair<U, T> {
  return new Pair(pair.getSecond(), pair.getFirst());
}

const pr = new Pair(1, 'string');

let newPr = swap(pr);

console.log(newPr.getFirst());
console.log(newPr.getSecond());