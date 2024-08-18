import { Suspense } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';

import { getTrendingMovies } from '../api/tmdb-api';
import MovieGallery from '../components/MovieGallery';

async function load({ signal }) {
  await new Promise(resolve => setTimeout(resolve, 1));
  return getTrendingMovies({ signal });
}

export function homePageLoader({ request }) {
  const data = load({ signal: request.signal });

  return defer({ data });
}

function HomePage() {
  const { data } = useLoaderData();

  return (
    <Suspense fallback={'Loading...'}>
      <Await resolve={data}>
        {({ results }) => {
          return <MovieGallery movies={results} />;
        }}
      </Await>
    </Suspense>
  );
}

export default HomePage;
