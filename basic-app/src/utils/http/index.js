import axios from 'axios';

export const GET = (url, headers = {}, ...options) => axios.get(url, {
  headers: {
    'Content-Type': 'application/json',
    ...headers,
  },
  crossDomain: true,
  ...options,
});

export const POST = (url, data, headers = {}, ...options) => axios.post(url, data, {
  headers: {
    ...headers,
  },
  crossDomain: true,
  ...options,
});
