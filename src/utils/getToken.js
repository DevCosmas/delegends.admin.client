function getToken() {
  const userFromLS = localStorage.getItem('user');
  const parsedUser = JSON.parse(userFromLS);
  const token = parsedUser.token;
  return token;
}
export default getToken;
