import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Root from './routes/Root';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter',
  },
});

const router = createBrowserRouter([
  { path: '/', element: <Root /> },
  { path: '/contact', element: <p>Hello World</p> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
