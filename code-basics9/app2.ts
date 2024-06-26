type UserPerson = {
  firstName: string;
  pointsCount: number;
}

function doSomething(user: UserPerson) {
  console.log(user.firstName);
  console.log(user.pointsCount);
}

const user = {
  firstName: 'Mike',
  pointsCount: 1000,
};

// Оба вызова работают
doSomething(user);
doSomething({ firstName: 'Bob', pointsCount: 1800 });