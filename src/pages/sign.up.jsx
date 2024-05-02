import Button from '../component/button.componet';
import FormUi from '../component/form';

function SignUpPage() {
  return (
    <FormUi>
      <input type="email" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <input type="password" placeholder="confirm password" />
      <input type="file" placeholder="photo" />
      <Button>Submit</Button>
    </FormUi>
  );
}
export default SignUpPage;
