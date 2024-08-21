import { Link, useLocation } from 'react-router-dom';

import classes from './MovieCard.module.css';
import { useTmdbImg } from './TmdbConfigProvider';

function MovieCard({ movie }) {
  const location = useLocation();
  const imageUrl = useTmdbImg(movie.poster_path);

  return (
    <div className={classes['movie-card']}>
      <Link to={`/movies/${movie.id}`} state={location}>
        <img
          className={classes['movie-card-img']}
          src={imageUrl}
          alt={movie.title}
          width={200}
          height={300}
        />
      </Link>

      <div className={classes['movie-card-link-container']}>
        <Link
          title={movie.title}
          className={classes['movie-card-link']}
          to={`/movies/${movie.id}`}
          state={location}
        >
          {movie.title}
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
