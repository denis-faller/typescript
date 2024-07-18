var arr = [1, 2, 3];
var comparator = function (item1, item2) {
    // (item1: number, item2: number) => -1 | 0 | 1;
    if (item1 === item2) {
        return 0;
    }
    return item1 > item2 ? 1 : -1;
};
sort(arr, comparator);
