import { useCallback } from 'react';
import { Link, Outlet, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';

import { getMovieDetails } from '../api/tmdb-api';
import classes from './MovieDetailsPage.module.css';
import { useTmdbImg } from '../components/TmdbConfigProvider';

export function loader({ request, params }) {
  return getMovieDetails({ movieId: params.movieId, signal: request.signal });
}

function MovieDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = useLoaderData();

  const imageUrl = useTmdbImg(movie.poster_path);

  const handleGoBack = useCallback(() => {
    navigate(location?.state?.pathname ?? '/movies');
  }, [location?.state?.pathname, navigate]);

  return (
    <div className={classes['movie-details-page']}>
      <button className={classes['go-back-button']} onClick={handleGoBack}>
        <GoArrowLeft />
        <span>Go Back</span>
      </button>
      <div className={classes['movie-details']}>
        <img
          className={classes['movie-poster']}
          src={imageUrl}
          alt={movie.title}
          width={300}
          height={450}
        />
        <div className={classes['movie-info']}>
          <section>
            <h2>
              {movie.title}&nbsp;({new Date(movie.release_date).getFullYear()})
            </h2>
            <p>Vote average: {movie.vote_average}</p>
          </section>
          <section>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </section>
          <section>
            <h3>Genres</h3>
            <ul className={classes['movie-genres']}>
              {movie.genres.map(genre => (
                <li className={classes['movie-genre']} key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Additional info</h3>
            <ul>
              <li>
                <Link to="cast" state={location}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={location}>
                  Reviews
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
