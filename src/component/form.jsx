import PropTypes from 'prop-types';
import StoreLogo from './store.logo';
import { Link } from 'react-router-dom';

function FormUi({ children, apiCall }) {
  return (
    <div className="px-10 py-5">
      <Link to={'/'} className="mb-10 block">
        <StoreLogo></StoreLogo>
      </Link>
      <form
        className="mx-auto my-auto flex w-5/6 flex-col items-center justify-center gap-3 rounded-md px-3  pb-10 pt-3 shadow-lg sm:w-1/2"
        onSubmit={apiCall}
      >
        {children}
      </form>
    </div>
  );
}

FormUi.propTypes = {
  children: PropTypes.node.isRequired,

  apiCall: PropTypes.func,
};

export default FormUi;
