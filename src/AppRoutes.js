import React from 'react';
import { Routes, Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/LoginPage';
import TodoList from './pages/TodoListPage';
import Contact from './pages/ContactPage';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/todolist/*" element={<PrivateRoute component={TodoList} />} />
        <Route path="/contact/*" element={<PrivateRoute component={Contact} />} />
      </Routes>
  );
};

export default AppRoutes;