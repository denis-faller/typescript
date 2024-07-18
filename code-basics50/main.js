// В качестве типа используется {}
function toStringNew(obj) {
    return obj.toString();
}
toStringNew('wow'); // Ok!
toStringNew({}); // Ok!
