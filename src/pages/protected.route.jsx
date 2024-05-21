/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const USERLocalStorage = localStorage.getItem('user');

  useEffect(() => {
    try {
      const USER = JSON.parse(USERLocalStorage);
      if (!USER || USER == null) {
        navigate('/login');
        return;
      }

      const { isAuthenticated: isLoggedIn, expTime } = USER;
      const CURRENTTIME = Math.floor(Date.now() / 1000);

      if (!isLoggedIn || CURRENTTIME >= expTime) {
        navigate('/login');
        localStorage.removeItem('user');
        return;
      }

      const clearLocalStorageTimeout = setTimeout(
        () => {
          localStorage.removeItem('user');
          navigate('/login');
        },
        (expTime - CURRENTTIME) * 1000,
      );

      return () => clearTimeout(clearLocalStorageTimeout);
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
      navigate('/login');
    }
  }, [navigate, USERLocalStorage]);

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
