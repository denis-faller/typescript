function join<T, U>(coll1: (T | U)[], coll2: U[]): (T | U)[] {
  return coll1.concat(coll2);
};

join<number, string>([1, 2], ['one', 'two']);