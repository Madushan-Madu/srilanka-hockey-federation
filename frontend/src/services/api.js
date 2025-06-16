import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Your backend API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can add interceptors here for handling tokens, errors, etc.
// Request interceptor to add authorization token if available
api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('userInfo')); // Assuming you store user info with token
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Example API calls (you'll add more as you create pages)

export const getNewsArticles = async (category = '') => {
  try {
    const response = await api.get(`/news?category=${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const getTournaments = async () => {
  try {
    const response = await api.get('/tournaments');
    return response.data;
  } catch (error) {
    console.error('Error fetching tournaments:', error);
    throw error;
  }
};

export const getAssociations = async () => {
  try {
    const response = await api.get('/associations');
    return response.data;
  } catch (error) {
    console.error('Error fetching associations:', error);
    throw error;
  }
};

export const getEquipmentListings = async (category = '') => {
  try {
    const response = await api.get(`/equipment?category=${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching equipment:', error);
    throw error;
  }
};

export const getOfficials = async (category = '') => {
  try {
    const response = await api.get(`/officials?category=${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching officials:', error);
    throw error;
  }
};

// You can add more specific CRUD functions for admin panel here as needed
// e.g., createNews, updateNews, deleteNews, loginUser, etc.

// Example for admin login (if you implement an admin panel)
export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    if (response.data.token) {
      localStorage.setItem('userInfo', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export default api;