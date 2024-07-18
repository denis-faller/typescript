const moderator = {
    firstName: 'Danil',
    lastName: 'Polovinkin',
    type: 'moderator',
    email: 'danil@polovinkin.com'
  }
  
  type User = {
    type: string,
    firstName: string,
    lastName: string
  }
  
  const formatUser = (user: User): string =>
    [user.type, ':', user.firstName, user.lastName].join(' ');
  
console.log(formatUser(moderator)); // ok