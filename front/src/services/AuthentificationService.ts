import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL ?? 'http://localhost:8080';

export const setAuthToken = (token: string) => {
    localStorage.setItem('token', token);

    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const getAuthToken = (): string | null => {
    return localStorage.getItem('token');
};

export const register = (username: string, email: string, password: string) => {
    return axios.post(`${API_URL}/api/user`, { email: email, username: username, password: password });
};

export const login = (email: string, password: string) => {
    return axios.post(`${API_URL}/api/login`, { email: email, password: password });
};

export const logout = () => {
    return localStorage.removeItem('token');
};
