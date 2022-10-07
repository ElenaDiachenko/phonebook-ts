import axios from 'axios';

export const contactsAxios = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const contactToken = {
  set(token) {
    contactsAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    contactsAxios.defaults.headers.common.Authorization = '';
  },
};
