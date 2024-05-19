/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  //   const { setTitle } = useAuth();

  //   useEffect(() => {
  //     setTitle('ERROR💥');
  //   }, [setTitle]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <h2 className="mb-4 text-4xl font-bold text-red-600">404 Error 💥</h2>
      <p className="mb-8 text-lg text-gray-700">Page not found</p>
      <Link to="/">
        <button className="w-fullrounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
          Go home
        </button>
      </Link>
    </div>
  );
}

export default ErrorPage;
