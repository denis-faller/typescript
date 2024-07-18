const wait = (ms: number): Promise<number> => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};