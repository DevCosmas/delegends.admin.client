import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const USER = localStorage.getItem('user');
  const PARSEDUSER = USER ? JSON.parse(USER) : null;
  const isLoggedIn = PARSEDUSER ? PARSEDUSER.isAuthenticated : false;
  const expTime = PARSEDUSER ? PARSEDUSER.expTime : 0;
  const CURRENTTIME = Math.floor(Date.now() / 1000);

  useEffect(() => {
    if (!isLoggedIn || CURRENTTIME >= expTime) {
      navigate('/login');
      localStorage.removeItem('user');
    }
    const clearLocalStorageTimeout = setTimeout(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      navigate('/login');
    }, 3600 * 1000);

    return () => clearTimeout(clearLocalStorageTimeout);
  }, [navigate, expTime, isLoggedIn, CURRENTTIME]);

  return isLoggedIn ? children : null;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
