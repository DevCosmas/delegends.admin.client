/* eslint-disable no-unused-vars */
import { createContext, useReducer, useContext, useState } from 'react';
import axios from 'axios';
import { BASEURLDEV, BASEURLPROD } from '../utils/constant';
import PropTypes from 'prop-types';
import { handleServerError } from '../utils/error.handler';
import notifySuccessMsg from '../utils/notify.succes';

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
      const response = await axios.post(`${BASEURLDEV}/user/loginCustomer`, {
        email,
        password,
      });

      if (response.status == 200) {
        const { doc } = response.data;
        notifySuccessMsg(response.data.message);

        dispatch({
          type: 'login',
          payload: { user: doc, token: doc.accessToken },
        });
        const expirationTime = new Date().getTime() + 60 * 60 * 1000;
        localStorage.setItem(
          'user',
          JSON.stringify({
            profilePic: doc.profilePic,
            token: doc.accessToken,
            username: doc.username,
            expirationTime,
            isAuthenticated: true,
          }),
        );
        setIsLoading(false);
        return true;
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
        user,
        isAuthenticated,
        token,
        signUp,
        setIsLoading,
        isLoading,
        login,
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
