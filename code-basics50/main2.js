var foo = {
    toStringNew: function () {
        return 1; // Ok!
    }
};
var bar = {
    toStringNew: function () {
        return 1; // Error!
    }
};
