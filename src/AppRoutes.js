import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';
import TodoListPage from './pages/TodoListPage';
import ContactPage from './pages/ContactPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<LoginPage />} />
      <Route path="/todolist/*" element={<PrivateRoute component={TodoListPage} />} />
      <Route path="/contact/*" element={<PrivateRoute component={ContactPage} />} />
    </Routes>
  );
};

export default AppRoutes;
