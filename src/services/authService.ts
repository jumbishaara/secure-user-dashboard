import axios, { AxiosResponse, AxiosError } from 'axios';

const API_URL = 'https://reqres.in/api';

interface AuthResponse {
  token: string;
}

interface ErrorResponse {
  error: string;
}

export const authService = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const response: AxiosResponse<AuthResponse> = await axios.post(`${API_URL}/login`, { email, password });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
        throw new Error(axiosError.response?.data.error || 'Login failed');
      } else {
        throw new Error('An unexpected error occurred during login');
      }
    }
  },
  register: async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const response: AxiosResponse<AuthResponse> = await axios.post(`${API_URL}/register`, { email, password });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
        throw new Error(axiosError.response?.data.error || 'Registration failed');
      } else {
        throw new Error('An unexpected error occurred during registration');
      }
    }
  },
};
