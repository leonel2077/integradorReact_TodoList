import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import MyThemeProvider from "./contexts/ThemeProvider";
import { TaskProvider } from './contexts/TaskContext';
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <ThemeProvider>
      <MyThemeProvider>
        <AuthProvider>
        <UserProvider>
          <TaskProvider>
            <AppRoutes />
          </TaskProvider>
         </UserProvider>
        </AuthProvider>
      </MyThemeProvider>
    </ThemeProvider>
  );
}

export default App;
