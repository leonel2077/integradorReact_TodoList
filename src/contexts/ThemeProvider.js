import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useTheme } from './ThemeContext';

const MyThemeProvider = ({ children }) => {
  const { isDarkMode } = useTheme();

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#1976D2', 
      },
      secondary: {
        main: '#FF4081', 
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      {children}
    </ThemeProvider>
  );
};

export default MyThemeProvider;