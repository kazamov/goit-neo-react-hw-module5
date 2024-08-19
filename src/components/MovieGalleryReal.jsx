import MovieCard from './MovieCard';
import MovieGallery from './MovieGallery';

function MovieGalleryReal({ movies }) {
  return (
    <MovieGallery>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MovieGallery>
  );
}

export default MovieGalleryReal;
