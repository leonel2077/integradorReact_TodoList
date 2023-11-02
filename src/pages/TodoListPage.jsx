import React, { useState } from "react";
import { useQuery } from "react-query";
import Navbar from "../components/Navbar";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Pagination from '@mui/material/Pagination';

export default function TodoList() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const { data: todos, isLoading, isError } = useQuery("todos", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
  });

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Error al cargar las tareas</div>;
  }

  const indexOfLastTodo = currentPage * itemsPerPage;
  const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <Navbar />
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Lista de tareas
            </Typography>
            <List>
              {currentTodos.map((todo) => (
                <ListItem key={todo.id}>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={todo.title}
                    secondary={todo.completed ? 'Completada' : 'Pendiente'}
                  />
                </ListItem>
              ))}
            </List>
            <Pagination
              count={Math.ceil(todos.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
