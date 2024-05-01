import PropTypes from 'prop-types';
import CartIcon from '../icons/cart';
import { Link } from 'react-router-dom';
import Button from '../component/button.componet';
import StoreLogo from '../component/store.logo';
import { useEffect, useState } from 'react';
import SignlCardUi from '../component/single.comp';
import GoBackIcon from '../icons/goBack.icon';

function MyCartPage({ myCart }) {
  const [itemToEdit, setItemToEdit] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [Qty, setQty] = useState(1);

  useEffect(() => {
    if (itemToEdit) {
      setQty(itemToEdit.quantity);
    }
  }, [itemToEdit]);

  function cancel() {
    setIsEdit(false);
    setItemToEdit(null);
  }

  function findItem(itemId) {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = existingCart.find((item) => item.id === itemId);
    setItemToEdit(existingItem);
    setIsEdit(true);
    return existingItem;
  }

  function saveItem() {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItemIndex = existingCart.findIndex(
      (item) => item.id === itemToEdit.id,
    );

    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity = Qty;
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));

    setIsEdit(false);
    setItemToEdit(null);
  }

  function removeItem(itemId) {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndexToRemove = existingCart.findIndex(
      (item) => item.id === itemId,
    );

    if (itemIndexToRemove !== -1) {
      existingCart.splice(itemIndexToRemove, 1);
    }
    localStorage.setItem('cart', JSON.stringify(existingCart));
  }

  function clearCart() {
    let existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart = [];
    localStorage.setItem('cart', JSON.stringify(existingCart));
  }

  return (
    <div className="py-7">
      <span className="mb-8 block px-10">
        <StoreLogo></StoreLogo>
      </span>
      {myCart.length === 0 && (
        <div className="mt-10 flex flex-col items-center justify-center gap-3 px-10">
          <span className="text-center text-xl font-bold">
            Nothing in your cart
          </span>
          <Link to={'/store'}>
            <Button
              classname={` text-center w-4/5 sm:w-72 bg-green-700 hover:bg-green-300 text-slate-50 hover:text-slate-950 rounded py-2 px-2 `}
            >
              Go shoping
            </Button>
          </Link>
        </div>
      )}
      {myCart.length >= 1 && (
        <div className="w-full overflow-x-auto pl-10">
          <table className="w-full table-auto">
            <thead className="bg-gray-200 font-sans">
              <tr>
                <th className="px-3 py-2 text-left"></th>
                <th className="px-3 py-2 text-left">Name</th>
                <th className="px-3 py-2 text-left">Quantity</th>
                <th className="px-3 py-2 text-left">Price (₦)</th>
                <th className="px-3 py-2 text-left">Total Price (₦)</th>
                <th className="px-3 py-2 text-left"></th>
                <th className="px-3 py-2 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {myCart.map((item, index) => (
                <tr key={index} className="border-t bg-white font-fontSec">
                  <td className="px-3 py-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12"
                    />
                  </td>
                  <td className="px-3 py-2">{item.name}</td>
                  <td className="px-3 py-2">{item.quantity}</td>
                  <td className="px-3 py-2">{item.price}</td>
                  <td className="px-3 py-2">{item.price * item.quantity}</td>
                  <td className="px-3 py-2">
                    <button
                      onClick={() => findItem(item.id)}
                      className="rounded bg-blue-500 px-2 py-1  text-white hover:bg-blue-200 hover:text-slate-950"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="px-3 py-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-700 hover:text-slate-50"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <span className="mt-10 flex gap-8 ">
            <button
              onClick={clearCart}
              className="rounded bg-red-500 px-2 py-1 uppercase text-slate-50 hover:bg-red-700 hover:text-slate-50"
            >
              clear cart
            </button>
            <button className=" flex items-center gap-1 rounded bg-green-300 px-2 py-1 uppercase text-slate-950 hover:bg-green-700 hover:text-slate-50">
              <span>checkout</span>
              <CartIcon></CartIcon>
            </button>
          </span>
        </div>
      )}

      {isEdit && (
        <SignlCardUi isSingle={isEdit}>
          {itemToEdit && (
            <form className="flex flex-col items-start justify-center gap-4 pb-5 pl-5 pr-4 pt-3">
              <input
                type="text"
                value={itemToEdit.name}
                readOnly
                className="font-sans font-bold"
              />
              <div className="flex flex-wrap items-center gap-4">
                <label htmlFor="quantity" className="font-bold">
                  Quantity
                </label>
                <input
                  type="number"
                  value={Qty}
                  onChange={(e) => setQty(e.target.value)}
                  className="border px-4"
                />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <label className="font-bold" htmlFor="price">
                  Price
                </label>
                <input
                  type="number"
                  value={itemToEdit.price}
                  readOnly
                  className="bg-none px-6"
                />
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <label className="font-bold" htmlFor="price">
                  Total Price
                </label>
                <input
                  type="number"
                  value={itemToEdit.price * Qty}
                  readOnly
                  className="bg-none px-6"
                />
              </div>
              <span className=" mt-8 flex items-center justify-between gap-5 text-center uppercase">
                <span
                  onClick={saveItem}
                  className="w-20 cursor-pointer rounded-full bg-green-800 pb-2 pl-2 pr-2 pt-2 capitalize text-slate-50 hover:bg-green-300 hover:text-slate-800"
                >
                  save
                </span>
                <Button
                  onClick={cancel}
                  classname={`hover:bg-red-300 rounded-full px-2 py-2 `}
                >
                  <span className="flex shrink items-center gap-1  text-sm ">
                    <GoBackIcon />
                    <span className="capitalize">go back</span>
                  </span>
                </Button>
              </span>
            </form>
          )}
        </SignlCardUi>
      )}
    </div>
  );
}

MyCartPage.propTypes = {
  myCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default MyCartPage;
