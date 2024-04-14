import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isAuthenticated: false,
    user: null as any,
  }),
  actions: {
    login(email: string, password: string) {
      // Implement login logic here
      // Update isAuthenticated and user state accordingly
    },
    logout() {
      // Implement logout logic here
      // Update isAuthenticated and user state accordingly
    },
  },
});