import PropTypes from 'prop-types';
import StoreLogo from './store.logo';

function FormUi({ children, apiCall }) {
  return (
    <div>
      <StoreLogo></StoreLogo>
      <form
        className="flex flex-col items-center justify-center gap-3 px-3 py-2 pb-2 shadow-lg"
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
