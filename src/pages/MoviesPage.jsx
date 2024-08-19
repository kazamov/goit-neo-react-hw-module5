import { useEffect, useRef, useState } from 'react';
import { GoSearch } from 'react-icons/go';

import MovieGalleryReal from '../components/MovieGalleryReal';
import { searchMovies } from '../api/tmdb-api';

import classes from './MoviesPage.module.css';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const abortControllerRef = useRef(null);

  const handleSearch = async event => {
    event.preventDefault();

    const searchQuery = event.target.elements['search-query'].value;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    setMovies([]);

    if (searchQuery) {
      const newController = new AbortController();
      abortControllerRef.current = newController;
      const searchResponse = await searchMovies({
        query: searchQuery,
        signal: newController.signal,
      });

      setMovies(searchResponse.results);
    }
  };

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return (
    <>
      <div className={classes['search-bar']}>
        <form onSubmit={handleSearch}>
          <div className={classes['search-input-container']}>
            <input
              type="text"
              name="search-query"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
            />
            <button type="submit" aria-label="Search movies">
              <GoSearch />
            </button>
          </div>
        </form>
      </div>
      {movies.length > 0 && <MovieGalleryReal movies={movies} />}
    </>
  );
}

export default MoviesPage;
