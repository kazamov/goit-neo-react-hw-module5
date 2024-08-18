const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const API_REQUEST_SETTINGS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
};

const LANGUAGE = 'en-US';

export async function getTrendingMovies({ signal }) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?language=${LANGUAGE}`,
      { ...API_REQUEST_SETTINGS, signal },
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getTmdbConfig({ signal }) {
  try {
    const response = await fetch('https://api.themoviedb.org/3/configuration', {
      ...API_REQUEST_SETTINGS,
      signal,
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
