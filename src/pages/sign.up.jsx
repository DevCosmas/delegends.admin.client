import Button from '../component/button.componet';
import FormUi from '../component/form';
import { Link } from 'react-router-dom';

function SignUpPage() {
  return (
    <FormUi>
      <h1 className="text-left text-lg font-bold">Sign Up here</h1>
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="email"
        placeholder="email"
      />
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="text"
        placeholder="username"
      />
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="password"
        placeholder="password"
      />
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="password"
        placeholder="confirm password"
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
    </FormUi>
  );
}
export default SignUpPage;
