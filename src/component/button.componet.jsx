import PropTypes from 'prop-types';
function Button({ children, classname }) {
  return <button className={classname}>{children}</button>;
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  classname: PropTypes.string,
};
export default Button;
