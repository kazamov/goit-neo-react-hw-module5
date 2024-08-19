import MovieCardSkeleton from './MovieCardSkeleton';
import MovieGallery from './MovieGallery';

const DUMMY_MOVIES = new Array(20).fill(null);

function MovieGallerySkeleton() {
  return (
    <MovieGallery>
      {DUMMY_MOVIES.map((_, index) => (
        <MovieCardSkeleton key={index} />
      ))}
    </MovieGallery>
  );
}

export default MovieGallerySkeleton;
