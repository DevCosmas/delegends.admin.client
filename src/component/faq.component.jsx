import { useState } from 'react';
import PropTypes from 'prop-types';

function FaqUi({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2 w-1/2 rounded-sm border-t-2 pb-2 pl-2 pr-2 pt-2 text-xs shadow-xl">
      <div
        onClick={toggleFaq}
        className="flex cursor-pointer items-center justify-between font-sans text-xs font-medium"
      >
        <span>{question}</span>
        <span
          className={`${isOpen ? 'rotate-180 text-gray-900' : 'text-emerald-500'} cursor-pointer text-lg`}
        >
          &#9662;
        </span>
      </div>
      <div
        className={`mt-1 ${isOpen ? 'block' : 'hidden'} border-t-2 border-green-400 py-2 pb-3 text-xs`}
      >
        {answer}
      </div>
    </div>
  );
}
FaqUi.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
export default FaqUi;
