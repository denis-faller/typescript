const getHours = async () => {
  return new Date().getHours();
};

const hoursPromise: Promise<number> = getHours();

console.log(hoursPromise);