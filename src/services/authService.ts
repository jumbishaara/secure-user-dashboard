import axios from 'axios';

const API_URL = 'https://reqres.in/api';

export const authService = {
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },
  register: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/register`, { email, password });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },
};