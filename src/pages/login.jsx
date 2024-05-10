import Button from '../component/button.componet';
import FormUi from '../component/form';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/user.context';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleLogin(e) {
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
        onChange={(e) => setPassword(e.target.value)} // Added e parameter here
      />

      <Button
        classname={`mt-5 w-4/5 rounded-md border bg-green-300 px-2 py-2 text-lg hover:bg-green-700 hover:text-slate-50`} // Changed classname to className
      >
        Login
      </Button>

      <div
        className="flex
       flex-col flex-wrap capitalize"
      >
        {' '}
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
      </div>
    </FormUi>
  );
}

export default LoginPage;
