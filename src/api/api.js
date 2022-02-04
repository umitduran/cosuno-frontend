import axios from 'axios';
import {configs} from './config';

const api = axios.create(configs);

const requestHandler = request => request;

const responseHandler = response => response;

const errorHandler = error => Promise.reject(error);

api.interceptors.request.use(
  request => requestHandler(request),
  error => errorHandler(error)
);

api.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error)
);

export default api;
