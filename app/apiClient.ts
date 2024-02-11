import axios from 'axios';

const API_BASE_URL = 'https://makromusic-web-task-api.onrender.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export default apiClient;
