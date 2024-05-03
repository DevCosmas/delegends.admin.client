import Button from '../component/button.componet';
import FormUi from '../component/form';

function SendResetTokenPage() {
  return (
    <FormUi>
      <h1 className="text-left text-lg font-bold">Get reset token</h1>
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="email"
        placeholder="email"
      />
      <Button
        classname={`text-lg bg-green-300 hover:bg-green-700 hover:text-slate-50 w-4/5 rounded-md border px-2 mt-5 py-2`}
      >
        Submit
      </Button>
    </FormUi>
  );
}
export default SendResetTokenPage;
