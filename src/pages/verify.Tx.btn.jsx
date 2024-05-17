/* eslint-disable no-unused-vars */
import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { BASEURLPROD } from '../utils/constant';
import getToken from '../utils/getToken';
import notifySuccessMsg from '../utils/notify.succes';
import { handleServerError } from '../utils/error.handler';
import { useNavigate } from 'react-router-dom';

function removeItem(itemId) {
  const existingOrder = JSON.parse(localStorage.getItem('orders')) || [];
  const itemIndexToRemove = existingOrder.findIndex(
    (item) => item.id === itemId,
  );

  if (itemIndexToRemove !== -1) {
    existingOrder.splice(itemIndexToRemove, 1);
  }
  localStorage.setItem('orders', JSON.stringify(existingOrder));
}

const VerificationButton = ({ txRef, orderId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const token = getToken();
  const navigate = useNavigate();

  const verifyTX = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASEURLPROD}/verifyTx/${txRef}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        notifySuccessMsg(response.data.message);
        removeItem(orderId);
      }
    } catch (error) {
      handleServerError(
        error.response.status,
        error.response.data.message,
        navigate,
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      disabled={isLoading}
      onClick={verifyTX}
      className={`mt-5 w-40 rounded-md px-2 py-2 text-center text-lg capitalize ${isLoading ? 'bg-green-300 text-slate-900' : ' bg-green-500 text-slate-50'}`}
    >
      {isLoading ? 'verifying...' : 'verify'}
    </button>
  );
};

VerificationButton.propTypes = {
  txRef: PropTypes.string.isRequired,
  orderId: PropTypes.string.isRequired,
};

export default VerificationButton;
