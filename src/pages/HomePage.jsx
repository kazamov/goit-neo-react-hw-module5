import { Suspense } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';

import { getTrendingMovies } from '../api/tmdb-api';
import MovieGallerySkeleton from '../components/MovieGallerySkeleton';
import MovieGalleryReal from '../components/MovieGalleryReal';

async function load({ signal }) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return getTrendingMovies({ signal });
}

export function homePageLoader({ request }) {
  const data = load({ signal: request.signal });

  return defer({ data });
}

function HomePage() {
  const { data } = useLoaderData();

  return (
    <Suspense fallback={<MovieGallerySkeleton />}>
      <Await resolve={data}>
        {({ results }) => {
          return <MovieGalleryReal movies={results} />;
        }}
      </Await>
    </Suspense>
  );
}

export default HomePage;
