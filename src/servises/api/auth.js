import instance from '../../instance/instance';
import { setToken, clearToken } from '../../instance/instance';

export const signup = async credentials => {
  const { data } = await instance.post('/api/auth/register', credentials);
  setToken(data.token);
  return data;
};
export const signin = async credentials => {
  const { data } = await instance.post('/api/auth/login', credentials);
  setToken(data.token);
  console.log(data, "data in API sign in")
  return data;
};
export const logout = async () => {
  const { data } = await instance.post('/api/auth/logout');
  clearToken();
  return data;
};
export const getCurrentUser = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/api/auth/current');
    return data;
  } catch (error) {
    clearToken();
    throw new Error(error.message);
  }

