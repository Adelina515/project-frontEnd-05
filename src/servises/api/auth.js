import axios from "axios";
import {token} from "../../utilits/token";
axios.defaults.baseURL = 'https://power-pulse-backend.onrender.com';

export async function signup(credentials) {
  const { data } = await axios.post('/auth/register', credentials);
  token.set(data.token);
  return data;
}
export async function signin(credentials) {
  const { data } = await axios.post('/auth/login', credentials);
  token.set(data.token);
  return data;

}
export async function logout() {
    const { data } = await axios.post('/auth/logout');
    token.unset();
    return data;
  }

