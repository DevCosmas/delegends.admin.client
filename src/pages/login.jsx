/* eslint-disable no-unused-vars */
import Button from '../component/button.componet';
import FormUi from '../component/form';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/user.context';
import { RotatingLines } from 'react-loader-spinner';
import Notify from '../component/notification';



function LoginPage() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login ,setIsLoading,isLoading} = useAuth();
  const navigate = useNavigate();

  async function handleLogin(e) {
    setIsLoading(true)
    e.preventDefault();
    const isLoggedIn = await login(email, password);
    if (isLoggedIn) navigate('/store');
  }

  return (
    <FormUi apiCall={handleLogin}>
      <h1 className="text-left text-lg font-bold">Login here</h1>
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)} 
      />

      {!isLoading&& <div>
        <Button
        classname={`mt-5 w-4/5  rounded-md border bg-green-300 px-2 py-2 text-lg hover:bg-green-700 hover:text-slate-50`} // Changed classname to className
      >
        Login
      </Button>

      <div
        className="flex
       flex-col flex-wrap capitalize"
      >
        
        <span className="mt-5 text-xl">
          {` Don't have an account? Sign Up `}
          <Link className="text-blue-700" to={'/signUp'}>
            Here
          </Link>
        </span>
        <span className="mt-5 text-xl">
          {` forgot password? click `}
          <Link className="text-blue-700" to={'/reset_token'}>
            Here
          </Link>
        </span>
      </div></div>}
      {isLoading && <RotatingLines height="40" width="40"></RotatingLines>}
      <Notify></Notify>
      
    </FormUi>
  );
}

export default LoginPage;
