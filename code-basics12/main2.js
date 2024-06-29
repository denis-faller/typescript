function processStart(callback) {
    // value имеет тип string
    var value = callback();
    // ...
}
processStart(Math.round);
