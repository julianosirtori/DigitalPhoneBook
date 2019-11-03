import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        const { headers } = config;
        headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
