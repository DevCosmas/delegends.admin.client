import PropTypes from 'prop-types';

function ReviewCard({ message, image, stars, name }) {
  const starIcons = [];
  for (let i = 0; i < stars; i++) {
    starIcons.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-4 w-4 text-yellow-500"
        key={i}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>,
    );
  }

  return (
    <div className=" mb-5 ml-10 mr-10 mt-5 h-60 min-w-64 flex-shrink grow flex-wrap overflow-hidden rounded-lg bg-white p-6 pb-5 pl-10 shadow-2xl">
      <div className="mb-4 flex items-start justify-center">
        <img
          src={image}
          alt="Reviewer Profile Pics"
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="mb-2 text-sm font-medium">{message}</p>
        <div className="flex">{starIcons}</div>

        <span className="mt-3 items-start text-left font-sans text-xs italic">
          {name}
        </span>
      </div>
    </div>
  );
}

ReviewCard.propTypes = {
  message: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  stars: PropTypes.number.isRequired,
};

export default ReviewCard;
