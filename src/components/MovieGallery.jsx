import MovieCard from './MovieCard';
import classes from './MovieGallery.module.css';

function MovieGallery({ movies }) {
  return (
    <ul className={classes['movie-gallery']}>
      {movies.map(movie => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}

export default MovieGallery;
