import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from './routes/user';
import Root from './routes/root';
import ErrorPage from './error-page';
import styles from './index.module.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts",
    element: <Root />,
  },
  {
    path: "/users",
    element: (
    <h1>Users main page</h1>
    ),
  },
  {
    path: "/users/:user",
    element: <User />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
