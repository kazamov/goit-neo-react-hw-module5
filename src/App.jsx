import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage, { homePageLoader } from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MovieCast from './components/MovieCast';
import MovieReviews from './components/MovieReviews';
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
        loader: homePageLoader,
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

function App() {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default App;
