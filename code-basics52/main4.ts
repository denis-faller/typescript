interface Person {
  name: string;
  age: number;
  location?: string;
}

const details: Pick<Person, 'name' | 'age'> = {
  name: 'John',
  age: 42,
};

const details2: Omit<Person, 'location'> = {
  name: 'John',
  age: 42,
};