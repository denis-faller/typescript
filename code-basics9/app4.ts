type Countable = (coll: number[]) => number

type UserPerson = {
    firstName: string;
    pointsCount: number;
    count(coll: number[]): number;
  }

  type User = {
    firstName: string;
    pointsCount: number;
    // Типы взяты для примера
    count(coll: (v: string) => string): number;
  }

  function printUser(user: User){
    console.log(user.firstName);
    console.log(user.pointsCount);
    const lenFirstName = (name: string): string => user.firstName;
    console.log(user.count(lenFirstName));
  }

printUser({ firstName: 'Bob', pointsCount: 1800, count: function(callback: (v: string) => string): number { return callback(this).length; }})