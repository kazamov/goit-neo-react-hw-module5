import { useLoaderData } from 'react-router-dom';

import CastMemberCard from './CastMemberCard';
import { getMovieCast } from '../api/tmdb-api';

import classes from './MovieCast.module.css';
import { useMemo } from 'react';

export function loader({ request, params }) {
  return getMovieCast({ movieId: params.movieId, signal: request.signal });
}

export function Component() {
  const data = useLoaderData();
  const cast = data.cast;

  const firstNineCastMembers = useMemo(() => cast.slice(0, 9), [cast]);

  return (
    <ul className={classes['cast']}>
      {firstNineCastMembers.map(castMember => (
        <li key={castMember.cast_id}>
          <CastMemberCard castMember={castMember} />
        </li>
      ))}
    </ul>
  );
}
