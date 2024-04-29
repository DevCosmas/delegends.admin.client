import PropTypes from 'prop-types';
import Button from './button.componet';
import CartIcon from '../icons/cart';
import GoBackIcon from '../icons/goBack.icon';

function SingleProductUi({ product, cancel }) {
  return (
    <div className="mx-auto w-full overflow-hidden rounded-lg bg-white pb-8 shadow-lg sm:w-1/2">
      <div className="text-center">
        <img
          className="mx-auto max-h-40 max-w-full object-contain"
          src={product.productImage}
          alt={`a photo of ${product.productName}`}
        />
      </div>
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-semibold uppercase">
          {product.productName}
        </div>
        <div>
          <p className="mb-1 mt-8 font-sans text-lg font-bold capitalize">
            description
          </p>
          <p className="font-fontSec text-base leading-7 text-gray-700">
            {product.productDescription}
          </p>
        </div>
        <div className="mt-4">
          <p className="mb-1 font-sans text-lg font-bold capitalize">
            contents
          </p>
          <p className="font-fontSec text-base leading-7 text-gray-700">
            {product.productContent}
          </p>
        </div>
        <p className="mt-4 font-semibold text-gray-800">
          Price: ₦{product.price}
        </p>
      </div>
      <div className="flex items-center gap-10 px-6 py-4 text-center">
        <Button classname="hover:bg-green-300 text-center justify-center flex flex-wrap w-auto hover:text-slate-950 pt-1 pb-1 pl-2 rounded-md pr-2 items-center text-md bg-slate-900 text-slate-50 border-solid border-slate-900">
          <span className="shrink text-xs">Add to cart</span>
          <CartIcon />
        </Button>
        <Button
          onClick={cancel}
          classname="hover:bg-red-300 text-center justify-center flex flex-wrap w-auto pt-1 pb-1 pl-2 rounded-md pr-2 items-center text-md text-slate-950 border-solid border-slate-900"
        >
          <span className="flex shrink items-center gap-1  text-sm">
            <GoBackIcon></GoBackIcon>
            <span className="capitalize">go back</span>
          </span>
        </Button>
      </div>
    </div>
  );
}

SingleProductUi.propTypes = {
  product: PropTypes.shape({
    productImage: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productDescription: PropTypes.string.isRequired,
    productContent: PropTypes.string.isRequired,

    price: PropTypes.number.isRequired,
  }).isRequired,
  cancel: PropTypes.func,
};

export default SingleProductUi;
