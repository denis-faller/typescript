type MyColl = {
  data: Array<number>;
  forEach(callback: (value: number, index: number, array: Array<number>) => void): void;
  at(index: number): number | undefined;
}

// Типы можно не прописывать, так как они указаны в `MyColl`
const coll: MyColl = {
  data: [1, 3, 8],
  forEach(callback) {
    this.data.forEach(callback);
  },
  at(index) {
    return this.data.at(index); // target >= ES2022
  },
}

console.log(coll.at(-1)); // 8