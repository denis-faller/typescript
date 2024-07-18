type User = {
  id: number;
  name: string;
  email: string;
}

type UserFields = User['id' | 'name' | 'email']; // string | number