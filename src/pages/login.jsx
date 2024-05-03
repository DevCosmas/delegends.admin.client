import Button from '../component/button.componet';
import FormUi from '../component/form';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <FormUi>
      <h1 className="text-left text-lg font-bold">Login here</h1>
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="email"
        placeholder="email"
      />

      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="password"
        placeholder="password"
      />

      <Button
        classname={`text-lg bg-green-300 hover:bg-green-700 hover:text-slate-50 w-4/5 rounded-md border px-2 mt-5 py-2`}
      >
        Login
      </Button>

      <span className="mt-5 text-xl">
        {` Dont't have an account? Sign Up`}

        <Link className="text-blue-700" to={'/signUp'}>
          Here
        </Link>
      </span>
    </FormUi>
  );
}
export default LoginPage;
