interface IUser {
  rating: number;
}

interface IUser {
  nickname: string;
  birthdate: number;
}


interface IStudent extends IUser {
  group: number;
}

const sergey: IStudent = {
  nickname: 'Sergey',
  birthdate: 1990,
  rating: 1102,
  group: 2,
}