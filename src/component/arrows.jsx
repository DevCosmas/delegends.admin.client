import PropTypes from 'prop-types';

function NextArrow({ className, style, onClick }) {
  return (
    <div
      className={`${className} absolute right-2 top-1/2 -translate-y-1/2 transform bg-green-800 text-slate-50 hover:bg-green-500 hover:text-slate-200`}
      style={{
        ...style,
        display: 'block',

        borderRadius: '50%',
      }}
      onClick={onClick}
    />
  );
}

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function PrevArrow({ className, style, onClick }) {
  return (
    <div
      className={`${className} absolute left-2 top-1/2 -translate-y-1/2 transform bg-green-800 text-slate-50 hover:bg-green-500 hover:text-slate-200`}
      style={{
        ...style,
        display: 'block',
        borderRadius: '50%',
      }}
      onClick={onClick}
    />
  );
}

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export { NextArrow, PrevArrow };
