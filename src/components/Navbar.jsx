import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { user } = useUser();

  const renderLoginButton = () => {
    if (user) {
      return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {`Bienvenido, ${user.name}`}
        </Typography>
      );
    } else {
      return (
        <Button color="inherit" component={Link} to="/">
          Login
        </Button>
      );
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {'To Do List Web'}
        </Typography>
        {renderLoginButton()}
        <Button color="inherit" component={Link} to="/TodoList">
          To Do List
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        <IconButton color="inherit" onClick={toggleTheme}>
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
