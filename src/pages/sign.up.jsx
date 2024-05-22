import Button from '../component/button.componet';
import FormUi from '../component/form';
import { RotatingLines } from 'react-loader-spinner';
import Notify from '../component/notification';

// import fileToDataURI from '../utils/create.imagae.blob';
import { useState } from 'react';
import { useAuth } from '../context/user.context';
import { useNavigate, Link } from 'react-router-dom';
import { PROFILE_PIC } from '../utils/constant';

function SignUpPage() {
  // const [file, setFile] = useState(null);
  // const [imgUri, setImgUri] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signUp,isLoading,setIsLoading } = useAuth();
  const navigate = useNavigate();

  async function SignUpApiCall(e) {
    setIsLoading(true)
    e.preventDefault();

   
      const signUpData = {
        username,
        email,
        password,
        confirmPassword,
        image: PROFILE_PIC,
      };

      const signUpComplete = await signUp(
        signUpData.email,
        signUpData.password,
        signUpData.confirmPassword,
        signUpData.username,
        signUpData.image,
      );
      if (signUpComplete) navigate('/login');
   
  }

  return (
    <FormUi apiCall={SignUpApiCall}>
      <h1 className="text-left text-lg font-bold">Sign Up here</h1>
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="password"
        placeholder="confirm password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
   

     {!isLoading &&  <div className='w-4/5  flex flex-col justify-center items-center'>
      <Button
        classname={`text-lg bg-green-300 mx-auto hover:bg-green-700 hover:text-slate-50 w-full rounded-md border px-2 mt-5 py-2`}
      >
        Submit
      </Button>
      <span className="mt-5 block text-xl">
        {` Already have an account? Login `}
        <Link className="text-blue-700" to={'/login'}>
          Here
        </Link>
      </span>
      </div>}
      {isLoading && <RotatingLines height="40" width="40"></RotatingLines>}
      <Notify></Notify>
    </FormUi>
  );
}

export default SignUpPage;
