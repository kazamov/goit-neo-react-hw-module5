import { Link, useLocation } from 'react-router-dom';

import classes from './MovieCard.module.css';
import { useTmdbConfig } from './TmdbConfigProvider';

function MovieCard({ movie }) {
  const location = useLocation();
  const config = useTmdbConfig();

  const baseUrl = config.images.secure_base_url;
  const size = config.images.poster_sizes[3];

  return (
    <div className={classes['movie-card']}>
      <Link to={`/movies/${movie.id}`} state={location}>
        <img
          className={classes['movie-card-img']}
          src={`${baseUrl}${size}${movie.poster_path}`}
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
