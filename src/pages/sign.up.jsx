import Button from '../component/button.componet';
import FormUi from '../component/form';
import { Link } from 'react-router-dom';
import fileToDataURI from '../utils/create.imagae.blob';
import { useState } from 'react';
import axios from 'axios';
import { BASEURLDEV } from '../utils/constant';

function SignUpPage() {
  const [file, setFile] = useState(null);
  const [imgUri, setImgUri] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function SignUpApiCall(e) {
    e.preventDefault();
    const signUpData = {
      username,
      email,
      password,
      confirmPassword,
    };
    if (file) {
      try {
        const createDataUri = await fileToDataURI(file[0]);
        setImgUri(createDataUri);
        signUpData.image = imgUri;
        const response = await axios.post(
          `${BASEURLDEV}/user/newCustomer`,
          signUpData,
        );
        console.log(response);
        console.log(response.data);
      } catch (error) {
        console.error(error.response);
      }
    } else {
      console.log('No file selected');
    }
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
      <label
        htmlFor="file-input"
        className="relative w-4/5 cursor-pointer rounded-md bg-gray-200 font-medium text-gray-700 hover:bg-gray-300"
      >
        <span className="inline-block px-4 py-2">Choose a Photo</span>
        <input
          id="file-input"
          name="file-input"
          type="file"
          className="sr-only"
          onChange={(e) => setFile(e.target.files)}
        />
      </label>

      <Button
        classname={`text-lg bg-green-300 hover:bg-green-700 hover:text-slate-50 w-4/5 rounded-md border px-2 mt-5 py-2`}
      >
        Submit
      </Button>

      <span className="mt-5 text-xl">
        Have an account? login{' '}
        <Link className="text-blue-700" to={'/login'}>
          Here
        </Link>
      </span>
      {imgUri !== '' && <img src={imgUri}></img>}
    </FormUi>
  );
}

export default SignUpPage;
