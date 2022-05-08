export const setUserSession = (token, user) => {
  localStorage.setItem('token', token)
}

export const getToken = () => {
  return localStorage.getItem('token') || null;
}

export const removeUserSession = () => {
  localStorage.removeItem('token');
}