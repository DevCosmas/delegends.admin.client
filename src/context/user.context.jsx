import { createContext, useReducer, useContext, useState } from 'react';
import Axios from 'axios';
import { BASEURLDEV } from '../utils/constant';
import PropTypes from 'prop-types';
import { handleServerError } from '../utils/error.handler';

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

  const [msg, setMsg] = useState('');
  const [msgStatus, setMsgStatus] = useState('');
  const [loader, setLoader] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // not done yet
  async function signUp(email, password, confirmPassword, username, image) {
    try {
      const response = await Axios.post(`${BASEURLDEV}/user/newCustomer`, {
        username,
        email,
        password,
        confirmPassword,
        image,
      });

      if (response.status === 201) {
        console.log(response);
        setMsg(response.data.message);
        setMsgStatus('success');
        setIsSuccess(true);
        dispatch({ type: 'signUp', payload: response.data });
        return true;
      } else {
        const errorMessage = response.data.message || 'Something went wrong';
        console.log(errorMessage);
        setMsg(errorMessage);
        setMsgStatus('fail');
      }
    } catch (error) {
      console.log(error);
      handleServerError(error, setMsg, setMsgStatus, setLoader);
    }
  }

  async function login(email, password) {
    try {
      if (!email && !password)
        throw new Error('Email and Password cannot be blank');
      const res = await Axios.post(`${BASEURLDEV}/user/loginCustomer`, {
        email,
        password,
      });
      if (!res) throw new Error(res.data);

      const { doc } = res.data;
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
      return true
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        token,
        signUp,
        msg,
        msgStatus,
        loader,
        isSuccess,
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
