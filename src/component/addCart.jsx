import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from './button.componet';
import GoBackIcon from '../icons/goBack.icon';

function AddToCartUi({ product, cancel }) {
  const [Qty, setQty] = useState(1);
  const price = product.price * Qty;
  return (
    <form className="flex flex-col items-start justify-center gap-4 pb-5 pl-5 pr-4 pt-3">
      <Button
        onClick={cancel}
        classname="hover:bg-red-300 text-center left-10 justify-center flex flex-wrap w-auto pt-1 pb-1 pl-2 rounded-md pr-2 items-center text-md text-slate-950 border-solid border-slate-900"
      >
        <span className="flex shrink items-center gap-1  text-sm">
          <GoBackIcon></GoBackIcon>
          <span className="capitalize">go back</span>
        </span>
      </Button>
      <input
        className="font-sans font-bold"
        type="text"
        name=""
        id=""
        value={product.productName}
      />
      <div className="flex flex-wrap items-center gap-4">
        <label htmlFor="quantity   " className="font-bold">
          Quantity
        </label>
        <input
          type="number"
          className=" px-4"
          name=""
          value={Qty > 1 ? Qty : 1}
          id=""
          onChange={(e) => setQty(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <label className="font-bold" htmlFor="price">
          Price
        </label>

        <input
          className="bg-none px-6"
          disabled
          type="number"
          name=""
          id=""
          value={product.price}
        />
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <label className="font-bold" htmlFor="price">
          Total Price
        </label>

        <input
          className="bg-none px-6"
          disabled
          type="number"
          name=""
          id=""
          value={price > product.price ? price : product.price}
        />
      </div>
      <span className=" mt-8 flex items-center justify-between gap-5 uppercase">
        <button className="w-20 cursor-pointer rounded-full bg-green-800 pb-2 pl-2 pr-2 pt-2 uppercase text-slate-50 hover:bg-green-300 hover:text-slate-800">
          add
        </button>
        <button
          className=" cursor-pointer rounded-full bg-red-300 pb-2 pl-2 pr-2 pt-2 uppercase hover:bg-red-800 hover:text-slate-200"
          disabled
        >
          continue shoping
        </button>
        <button
          className=" cursor-pointer rounded-full border border-green-900 pb-2 pl-2 pr-2 pt-2 uppercase hover:bg-blue-900 hover:text-slate-50"
          disabled
        >
          checkout
        </button>
      </span>
    </form>
  );
}

AddToCartUi.propTypes = {
  product: PropTypes.shape({
    productImage: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productDescription: PropTypes.string.isRequired,
    productContent: PropTypes.string.isRequired,

    price: PropTypes.number.isRequired,
  }).isRequired,
  cancel: PropTypes.func,
};
export default AddToCartUi;
