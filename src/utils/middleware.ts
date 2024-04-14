import { useAuthStore } from '../store/authStore';
import { Redirect, Routes } from 'react-router-dom';
import React from 'react';

export const ProtectedRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const authStore = useAuthStore();

  return (
    <Routes>
      {...rest}
      render={(props) => {
        return authStore.isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />;
      }
    </Routes>
  );
};