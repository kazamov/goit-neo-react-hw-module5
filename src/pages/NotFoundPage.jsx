import { Link } from 'react-router-dom';
import { HiOutlineFilm } from 'react-icons/hi';
import { GoHome } from 'react-icons/go';

import classes from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={classes['not-found']}>
      <div className={classes['not-found-content']}>
        <HiOutlineFilm size={'7rem'} />
        <h1>404: Scene Not Found</h1>
        <p>
          Oops! It looks like this scene didn&apos;t make the final cut. The page you&apos;re
          looking for is not in our reel.
        </p>
        <Link to="/">
          <button>
            <GoHome size={'1.25rem'} />
            <span>Go Home</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
