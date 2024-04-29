import PropTypes from 'prop-types';

function SignlCardUi({ children, isSingle }) {
  return (
    <div
      className={` pt-12 ${isSingle ? 'block' : 'hidden'} absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-scroll backdrop-blur-sm backdrop-filter`}
    >
      <div className="mx-auto w-full overflow-hidden rounded-lg bg-white pb-8 shadow-lg sm:w-1/2">
        {children}
      </div>
    </div>
  );
}

SignlCardUi.propTypes = {
  children: PropTypes.node.isRequired,
  isSingle: PropTypes.bool.isRequired,
};
export default SignlCardUi;
