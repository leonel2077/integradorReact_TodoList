import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const DrawerComponent = ({ isOpen, onClose }) => {
  const { user } = useUser();

  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <List>
       {user && (
          <ListItem>
             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {`Bienvenido, ${user.name}`}
            </Typography>
          </ListItem>
        )}
        {!user && (
          <ListItemButton component={Link} to="/" onClick={onClose}>
            <ListItemText primary="Login" />
          </ListItemButton>
        )}
        <ListItemButton component={Link} to="/TodoList" onClick={onClose}>
          <ListItemText primary="To Do List" />
        </ListItemButton>
        <ListItemButton component={Link} to="/contact" onClick={onClose}>
          <ListItemText primary="Contact" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
