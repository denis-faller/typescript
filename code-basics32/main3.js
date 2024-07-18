var moderator = {
    firstName: 'Danil',
    lastName: 'Polovinkin',
    type: 'moderator',
    email: 'danil@polovinkin.com'
};
var formatUser = function (user) {
    return [user.type, ':', user.firstName, user.lastName].join(' ');
};
console.log(formatUser(moderator)); // ok
