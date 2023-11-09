import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  // Función para iniciar sesión
  const login = (email, password) => {
    if (email === 'usuario' && password === 'demo') {
      setAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ authenticated, login}}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
