type IntersectionUser = {
    username: string;
    password: string;
  } & {
      type: string;
  }
  
  const admin: IntersectionUser = {  // требуется совпадение c объектным типом и слева и справа от оператора &
    username: 'test',
    password: 'test',
    type: 'admin'
  }
  
  type UnionUser = {
      username: string;
      password: string;
  } | {
      type: string;
  }
  
  const user: UnionUser = { username: 'test', type: 'user' } // достаточно совпадения с одним из объектных типов