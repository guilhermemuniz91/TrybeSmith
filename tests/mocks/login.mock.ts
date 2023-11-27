const validPassword = 'ch4ng3m3';
const noUsernameLoginBody = { username: '', password: validPassword };

const validUsername = 'user1';
const noPasswordLoginBody = { username: validUsername, password: '' };

const notExistingUserBody = { username: 'notfound', password: validPassword };

export default {
  noUsernameLoginBody,
  noPasswordLoginBody,
  notExistingUserBody,
};