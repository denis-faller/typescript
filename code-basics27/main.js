function foo(value) {
    var upperValue = value.toUpperCase();
    // остальная логика
}
foo(null); // Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')
