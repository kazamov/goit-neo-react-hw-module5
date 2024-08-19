import clsx from 'clsx';
import classes from './MovieCardSkeleton.module.css';

const MovieCardSkeleton = () => {
  return (
    <div className={classes['movie-card-skeleton']}>
      <div className={clsx(classes['skeleton'], classes['poster'])}></div>
      <div className={classes['title-container']}>
        <div className={clsx(classes['skeleton'], classes['title'])}></div>
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
