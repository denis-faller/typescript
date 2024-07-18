// Типы можно не прописывать, так как они указаны в `MyColl`
var coll = {
    data: [1, 3, 8],
    forEach: function (callback) {
        this.data.forEach(callback);
    },
    at: function (index) {
        return this.data.at(index); // target >= ES2022
    },
};
console.log(coll.at(-1)); // 8
