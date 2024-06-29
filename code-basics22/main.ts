// Тип number[][] выводится автоматически
const items1 = [[3, 8], [10, 4, 8]];

console.log(items1);

const items2: number[][] = []
// или так Array<number[]>

// Используя псевдоним
type User = {
  name: string;
}

// или так Array<User[]>
const users: User[][] = [
  [{ name: 'Eva'}, { name: 'Adam' }],
];


console.log(users);