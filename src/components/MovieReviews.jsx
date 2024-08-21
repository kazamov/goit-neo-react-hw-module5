import { useLoaderData } from 'react-router-dom';
import { getMovieReviews } from '../api/tmdb-api';

import classes from './MovieReviews.module.css';

export async function loader({ request, params }) {
  return getMovieReviews({ movieId: params.movieId, signal: request.signal });
}

export function Component() {
  const data = useLoaderData();
  const reviews = data.results;

  if (reviews.length === 0) {
    return <p>No reviews found</p>;
  }

  return (
    <ul className={classes['reviews']}>
      {reviews.map(review => (
        <li className={classes['review']} key={review.id}>
          <p className={classes['review-author']}>A review by {review.author}</p>
          <p
            className={classes['review-content']}
            dangerouslySetInnerHTML={{ __html: review.content }}
          />
        </li>
      ))}
    </ul>
  );
}
