import { Outlet, useLoaderData } from 'react-router-dom';

import TmdbConfigProvider from './TmdbConfigProvider';
import Navigation from './Navigation';
import classes from './Layout.module.css';

function Layout() {
  const config = useLoaderData();

  return (
    <TmdbConfigProvider config={config}>
      <header className={classes['header']}>
        <Navigation />
      </header>
      <main className={classes['main']}>
        <Outlet />
      </main>
    </TmdbConfigProvider>
  );
}

export default Layout;
