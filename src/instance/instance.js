
import axios from 'axios';

const baseURL = 'https://power-pulse-backend.onrender.com';

const instance = axios.create({
  baseURL: `${baseURL}/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setToken = token => {
	instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
	instance.defaults.headers.common.Authorization = "";
};
export default instance;