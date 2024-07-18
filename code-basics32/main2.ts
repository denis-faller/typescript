type ComparatorCallback = (item1: number, item2: number) => -1 | 0 | 1
declare function sort(arr: Array<number>, callback: ComparatorCallback): Array<number>

const arr = [1, 2, 3];
const comparator = (item1: number, item2: number) => {
// (item1: number, item2: number) => -1 | 0 | 1;
    if (item1 === item2) {
        return 0;
    }

    return item1 > item2 ? 1 : -1;
};

sort(arr, comparator);