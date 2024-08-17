import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <div>Page Not Found</div>
      <Link to="/">Go Home</Link>
    </>
  );
}

export default NotFoundPage;
