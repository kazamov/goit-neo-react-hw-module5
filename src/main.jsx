import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'modern-normalize';

import './index.css';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MovieCast from './components/MovieCast';
import MovieReviews from './components/MovieReviews';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/movies',
        element: <MoviesPage />,
      },
      {
        path: '/movies/:movieId',
        element: <MovieDetailsPage />,
        children: [
          {
            path: '/movies/:movieId/cast',
            element: <MovieCast />,
          },
          {
            path: '/movies/:movieId/reviews',
            element: <MovieReviews />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </StrictMode>,
);
