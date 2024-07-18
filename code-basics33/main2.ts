const user = {
    firstName: 'Vassiliy',
    lastName: 'Kuzenkov',
    type: 'user'
  }
  
  const admin = {
    firstName: 'Kirill',
    lastName: 'Mokevnin',
    type: 'admin'
  }
  
  type User = {
    type: string,
    firstName: string,
    lastName: string
  }
  
  const formatUser = (user: User): string =>
    [user.type, ':', user.firstName, user.lastName].join(' ');
  
  console.log(formatUser(user)); // ok
  console.log(formatUser(admin)); // ok