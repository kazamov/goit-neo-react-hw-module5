import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';

import { getTmdbConfig } from './api/tmdb-api';

const router = createBrowserRouter([
  {
    element: <Layout />,
    loader: async ({ request }) => {
      return getTmdbConfig({ signal: request.signal });
    },
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        lazy: async () => {
          const { default: Component, loader } = await import('./pages/HomePage');
          return {
            Component,
            loader,
          };
        },
      },
      {
        path: '/movies',
        lazy: async () => {
          const { default: Component } = await import('./pages/MoviesPage');
          return {
            Component,
          };
        },
      },
      {
        path: '/movies/:movieId',
        lazy: async () => {
          const { default: Component, loader } = await import('./pages/MovieDetailsPage');
          return {
            Component,
            loader,
          };
        },
        children: [
          {
            path: '/movies/:movieId/cast',
            lazy: () => import('./components/MovieCast'),
          },
          {
            path: '/movies/:movieId/reviews',
            lazy: () => import('./components/MovieReviews'),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default App;
