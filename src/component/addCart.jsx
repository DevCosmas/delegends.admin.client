import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from './button.componet';
import GoBackIcon from '../icons/goBack.icon';
// import { useCart } from '../utils/useCart';
// import { actionTypes } from '../utils/action.types';

function AddToCartUi({ product, cancel }) {
  const [Qty, setQty] = useState(1);
  const price = product.price * Qty;
  const [isAdded, setIsAdded] = useState(false);

  function saveCart() {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = existingCart.findIndex(
      (item) => item.id === product._id,
    );
    const parsedPrice = parseFloat(price);
    const parsedQuantity = parseInt(Qty);
    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += parsedQuantity;
      existingCart[existingItemIndex].totalPrice += parsedPrice;
    } else {
      const cartToBeSaved = {
        name: product.productName,
        price: price,
        totalPrice: price * Qty,
        quantity: Number(Qty),
        image: product.productImage,
        id: product._id,
      };

      existingCart.push(cartToBeSaved);
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
    setIsAdded(true);
  }

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
          className=" border px-4"
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
      <span className=" mt-8 flex items-center justify-between gap-5 text-center uppercase">
        <span
          onClick={() => saveCart()}
          className="w-20 cursor-pointer rounded-full bg-green-800 pb-2 pl-2 pr-2 pt-2 uppercase text-slate-50 hover:bg-green-300 hover:text-slate-800"
        >
          add
        </span>
        <button className=" cursor-pointer rounded-full bg-red-300 pb-2 pl-2 pr-2 pt-2 text-center uppercase hover:bg-red-800 hover:text-slate-200">
          continue shoping
        </button>
        <button
          className={` ${isAdded ? 'block' : 'hidden'} cursor-pointer rounded-full border border-green-900 pb-2 pl-2 pr-2 pt-2 text-center uppercase hover:bg-blue-900 hover:text-slate-50`}
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
    _id: PropTypes.string,
  }).isRequired,
  cancel: PropTypes.func,
  addToCart: PropTypes.func,
  addCartParams: PropTypes.object,
};
export default AddToCartUi;
