import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./App";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
      </QueryClientProvider>
    </React.StrictMode>
);

