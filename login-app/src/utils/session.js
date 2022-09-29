export const setUserSession = (token, user) => {
  localStorage.setItem('token', token)
  localStorage.setItem('user', user)
}

export const getToken = () => {
  const token = localStorage.getItem('token');
  if(token !== null) return token;
  return false;
}

export const getUserData = () => {
  var data = localStorage.getItem('user');
  if(data !== null) return data;
  return false;
}

export const removeUserSession = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}