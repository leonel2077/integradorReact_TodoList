import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useAuth();

  return (
    <Routes>
      {authenticated ? (
        <Route {...rest} element={<Component />} />
      ) : (
        <Navigate to="/" />
      )}
    </Routes>
  );
};

export default PrivateRoute;
