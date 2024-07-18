type User = {
  id: number;
  name: string;
  email: string;
}

type UserFields = User[keyof User]; // string | number