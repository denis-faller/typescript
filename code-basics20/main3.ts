function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}

function foo(value: unknown) {
  if (isObject(value)) {
    // (parameter) value: object
  }
}