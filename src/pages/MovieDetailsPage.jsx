import { Outlet } from 'react-router-dom';

function MovieDetailsPage() {
  return (
    <>
      <div>Movie Details Page</div>
      <Outlet />
    </>
  );
}

export default MovieDetailsPage;
