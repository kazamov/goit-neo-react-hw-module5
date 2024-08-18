import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';

import classes from './Navigation.module.css';

function getNavListItemClasses({ isActive }) {
  return clsx(classes['navigation-link'], {
    [classes['active']]: isActive,
  });
}

function Navigation() {
  return (
    <nav className={classes['navigation']}>
      <ul className={classes['navigation-list']}>
        <li>
          <NavLink className={getNavListItemClasses} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={getNavListItemClasses} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
