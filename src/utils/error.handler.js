import { toast, Bounce } from 'react-toastify';
const handleServerError = (errorStatus, message) => {
  const toastProp = {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  };
  if (errorStatus === 400) {
    toast.warning(message, { ...toastProp });
  }
  if (errorStatus === 401) {
    return (window.href = '/login');
  }
  if (errorStatus === 404) {
    toast.error(message, { ...toastProp });
  }
  if (errorStatus == 500) {
    toast.error('Something went really wrong here. Try again later', {
      ...toastProp,
    });
  }
};

export { handleServerError };
