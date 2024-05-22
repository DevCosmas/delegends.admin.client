/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Button from '../component/button.componet';
import FormUi from '../component/form';
import axios from 'axios';
import { BASEURLDEV, BASEURLPROD } from '../utils/constant';
import { useNavigate } from 'react-router-dom';

function SetNewPasswordPage() {
  const [resetToken, setResetToken] = useState('');
  const [newPassword, setNewpassword] = useState('');
  const [confirmPassword, setConfrimPassword] = useState('');
  const navigate = useNavigate();
  async function setNewPasswordFn(token, password, confirmPassword) {
    try {
      const response = await axios.patch(
        `${BASEURLPROD}/user/customerResetPassword`,
        {
          token,
          password,
          confirmPassword,
        },
      );

      if (response.status === 200) {
        console.log(response);
        return navigate('/login');
      }
    } catch (error) {
      console.log(error.response);
    }
  }
  async function handleApiCall(e) {
    e.preventDefault();
    await setNewPasswordFn(resetToken, newPassword, confirmPassword);
  }
  return (
    <FormUi apiCall={handleApiCall}>
      <h1 className="text-left text-lg font-bold">Set new password</h1>

      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="text"
        placeholder="token"
        onChange={(e) => setResetToken(e.target.value)}
      />
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="password"
        placeholder="password"
        onChange={(e) => setNewpassword(e.target.value)}
      />
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="password"
        placeholder="confirm password"
        onChange={(e) => setConfrimPassword(e.target.value)}
      />

      <Button
        classname={`text-lg bg-green-300 hover:bg-green-700 hover:text-slate-50 w-4/5 rounded-md border px-2 mt-5 py-2`}
      >
        Submit
      </Button>
    </FormUi>
  );
}
export default SetNewPasswordPage;
