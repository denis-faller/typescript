const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(42);
  }, 1000);
});