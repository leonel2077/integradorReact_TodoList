import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useAuth();

  if (authenticated) {
    return (
      <Routes>
      <Route
        {...rest}
        path='/*'
        element={authenticated ? <Component /> : <Navigate to="/" />}
      />
    </Routes>
    )} else {
      console.log('Usuario redirigido a la página de inicio de sesión.');
      return <Navigate to="/" />;
    }
};

export default PrivateRoute;