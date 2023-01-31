import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import UsersList from './routes/usersList';
import Users from './routes/users';
import PostsList from './routes/postsList';
import Posts from './routes/posts';
import ErrorPage from './error-page';
import styles from './index.module.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} errorElement={<ErrorPage />}></Route>
      <Route path="users" element={<UsersList />}></Route>
      <Route path="users/:userID" element={<Users />}></Route>
      <Route path="posts" element={<PostsList />}></Route>
      <Route path="posts/:postID" element={<Posts />}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
