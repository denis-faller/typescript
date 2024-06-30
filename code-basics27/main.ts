function foo(value) {
    const upperValue = value.toUpperCase();
    // остальная логика
  }
  
  foo(null); // Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')