import React from 'react';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import Navbar from '../components/Navbar';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Contáctanos
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Nombre/s"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Apellido"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Mensaje"
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
