/* eslint-disable no-unused-vars */
import {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from 'react';
import axios from 'axios';
import { BASEURLDEV, BASEURLPROD } from '../utils/constant';
import PropTypes from 'prop-types';
import { handleServerError } from '../utils/error.handler';
import notifySuccessMsg from '../utils/notify.succes';
import getToken from '../utils/getToken';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  token: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case 'signUp':
      return {
        ...state,
      };
    case 'logout':
      return { ...state, user: null, isAuthenticated: false, token: '' };
    case 'handleUserUpdate':
      return {
        ...state,
        user: action.payload.data,
      };
    default:
      throw new Error('No action was found');
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, token }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const [isLoading, setIsLoading] = useState(false);
  const previousUserDetails = useLocalStorage('user', null);
  const previousUser = previousUserDetails[0];

  function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
  }

  async function signUp(email, password, confirmPassword, username, image) {
    try {
      const response = await axios.post(`${BASEURLPROD}/user/newCustomer`, {
        username,
        email,
        password,
        confirmPassword,
        image,
      });

      if (response.status === 201) {
        console.log(response);
        setIsLoading(false);
        notifySuccessMsg(response.data.message);
        dispatch({ type: 'signUp', payload: response.data.message });
        return true;
      }
    } catch (error) {
      setIsLoading(false);
      handleServerError(error.response.status, error.response.data.message);
    }
  }

  async function login(email, password) {
    try {
      if (!email && !password)
        throw new Error('Email and Password cannot be blank');
      const response = await axios.post(`${BASEURLPROD}/user/loginCustomer`, {
        email,
        password,
      });

      if (response.status == 200) {
        const { doc } = response.data;
        const { exp } = jwtDecode(doc.accessToken);
        notifySuccessMsg(response.data.message);
        localStorage.setItem(
          'user',
          JSON.stringify({
            profilePic: doc.profilePic,
            token: doc.accessToken,
            username: doc.username,
            expirationTime: exp,
            isAuthenticated: true,
            email: doc.email || email,
          }),
        );
        dispatch({
          type: 'login',
          payload: { user: doc, token: doc.accessToken },
        });

        setIsLoading(false);
        return true;
      }
    } catch (error) {
      console.log(error.response);
      setIsLoading(false);
      handleServerError(error.response.status, error.response.data.message);
    }
  }

  async function updateUser(email, username, photo) {
    try {
      setIsLoading(true);
      const usertoken = getToken();
      const response = await axios.patch(
        `${BASEURLDEV}/user/updateMe`,
        {
          email,
          username,
          image: photo,
        },
        {
          headers: {
            Authorization: `Bearer ${usertoken}`,
          },
        },
      );
      if (response.status === 200) {
        setIsLoading(false);
        const { doc } = response.data;
        const userfromLs = localStorage.getItem('user');
        const parseUser = JSON.parse(userfromLs);
        localStorage.setItem(
          'user',
          JSON.stringify({
            ...parseUser,
            profilePic: doc.image,
            username: doc.username,
            email: doc.email,
          }),
        );
        notifySuccessMsg(response.data.message);
      }
    } catch (error) {
      console.log(error.response);
      setIsLoading(false);
      handleServerError(error.response.status, error.response.data.message);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        useLocalStorage,
        user,
        isAuthenticated,
        token,
        signUp,
        // logout,
        setIsLoading,
        isLoading,
        login,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, useAuth };
