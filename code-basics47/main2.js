function join(coll1, coll2) {
    return coll1.concat(coll2);
}
;
join([1, 2], ['one', 'two']); // [1, 2, 'one', 'two']
