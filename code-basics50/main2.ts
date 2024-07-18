const foo: {} = {
  toStringNew() {
   return 1; // Ok!
  }
};

const bar: Object = {
  toStringNew() {
    return 1; // Error!
  }
};