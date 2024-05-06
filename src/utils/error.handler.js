const handleServerError = (error, setMsg, setMsgStatus, setLoader) => {
  if (error.response) {
    if (error.response.status === 500) {
      setMsg('Something went wrong. Please try again!');
    } else if (error.response.status === 429) {
      setMsg('Too many requests. Please try again later!');
    } else {
      setMsg(error.response.data.message || 'An error occurred');
    }
  } else {
    setMsg('An error occurred');
  }
  setMsgStatus('fail');
  setLoader(false);
};

export { handleServerError };
