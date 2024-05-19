import PropTypes from 'prop-types';

function ServiceUi({ name, image }) {
  return (
    <div className="relative mx-auto  mb-2 w-full pr-4 sm:w-4/5 ">
      <div className="relative h-60 w-full md:w-80">
        <img
          className="h-60 w-full md:w-full"
          src={image}
          alt={`A ${name} service image`}
        />
        <p className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 text-center text-lg text-white">
          {name}
        </p>
      </div>
    </div>
  );
}

ServiceUi.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ServiceUi;
