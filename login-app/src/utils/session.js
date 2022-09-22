export const setUserSession = (token, user) => {
  localStorage.setItem('token', token)
  localStorage.setItem('user', user)
}

export const getToken = () => {
  if(localStorage.getItem('token') !== null) return true;
  return false;
}

export const getUserData = () => {
  var data = localStorage.getItem('user');
  if(data !== null) return data;
  return false;
}

export const removeUserSession = () => {
  localStorage.removeItem('token');
}