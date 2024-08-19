import { Children } from 'react';
import classes from './MovieGallery.module.css';

function MovieGallery({ children }) {
  return (
    <ul className={classes['movie-gallery']}>
      {Children.map(children, child => {
        return <li key={child.key}>{child}</li>;
      })}
    </ul>
  );
}

export default MovieGallery;
