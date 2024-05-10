/* eslint-disable no-unused-vars */
import axios from 'axios';
import Button from '../component/button.componet';
import FormUi from '../component/form';
import { BASEURLDEV } from '../utils/constant';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SendResetTokenPage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate('');
  async function sendResetToken(email) {
    try {
      const response = await axios.post(
        `${BASEURLDEV}/user/customerForgetPassword`,
        { email },
      );
      if (response.status === 200) {
        console.log(response);
        return navigate('/set_new_password');
      } else {
        throw Error(response.data.message);
      }
    } catch (error) {
      console.log(error.response);
    }
  }

  async function handleSendToken(e) {
    e.preventDefault();
    await sendResetToken(email);
  }
  return (
    <FormUi apiCall={handleSendToken}>
      <h1 className="text-left text-lg font-bold">Get reset token</h1>
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
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
