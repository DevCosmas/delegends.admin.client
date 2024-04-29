import PropTypes from 'prop-types';

function Button({ children, classname, onClick, onClickParams }) {
  const handleClick = () => {
    if (onClick) {
      onClick(onClickParams);
    }
  };

  return (
    <button onClick={handleClick} className={classname}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classname: PropTypes.string,
  onClick: PropTypes.func,
  onClickParams: PropTypes.any,
};

export default Button;
