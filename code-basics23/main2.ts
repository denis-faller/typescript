const items: readonly ({ key: string })[] = [{ key: 'value'}];
items[0].key = 'another value'; // ok!

console.log(items[0].key);