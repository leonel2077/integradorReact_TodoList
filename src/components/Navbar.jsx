import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import DrawerComponent from './DrawerComponent';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { user } = useUser();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const renderLoginButton = () => {
    if (user && !isSmallScreen) {
      return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {`Bienvenido, ${user.name}`}
        </Typography>
      );
    } else if (user && isSmallScreen) {
      return null; 
    } else {
      return (
        <Button color="inherit" component={Link} to="/">
          Login
        </Button>
      );
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {isSmallScreen && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerOpen}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {'To Do List Web'}
          </Typography>
          {renderLoginButton()}
          {!isSmallScreen && (
            <>
              <Button color="inherit" component={Link} to="/TodoList">
                To Do List
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                Contact
              </Button>
            </>
          )}
          <IconButton color="inherit" onClick={toggleTheme}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <DrawerComponent isOpen={drawerOpen && isSmallScreen} onClose={handleDrawerClose} />
    </>
  );
};

export default Navbar;
