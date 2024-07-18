const user = {
    firstName: 'Vasiliy',
    lastName: 'Kuzenkov',
    type: 'user'
  }
  
  const admin = {
    firstName: 'Kirill',
    lastName: 'Mokevnin',
    type: 'admin'
  }
  
  const formatUser = (user) => [user.type, ':', user.firstName, user.lastName].join(' ');
  
console.log(formatUser(user)); // ok
console.log(formatUser(admin)); // ok