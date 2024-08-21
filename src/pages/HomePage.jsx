import { Suspense } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';

import { getTrendingMovies } from '../api/tmdb-api';
import MovieGallerySkeleton from '../components/MovieGallerySkeleton';
import MovieGalleryReal from '../components/MovieGalleryReal';

export async function loader({ request }) {
  const data = getTrendingMovies({ signal: request.signal });

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
