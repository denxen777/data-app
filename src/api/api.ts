import axios from 'axios';

const URL = 'https://test.v5.pryaniky.com';

export const api = axios.create({
  baseURL: URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.set('x-auth', token);
    }
    return config;
  },
  (error) => Promise.reject(error)
);
