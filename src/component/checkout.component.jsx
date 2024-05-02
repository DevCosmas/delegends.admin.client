import PropTypes from 'prop-types';
import { DELIVERYFEE } from '../utils/constant';

function CheckOutUi({ cart, cancel }) {
  const grandTotalArr = cart.map((item) => item.totalPrice);
  const Total = grandTotalArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

  return (
    <div className="container mx-auto">
      <form className="mx-auto flex max-w-lg flex-col items-center justify-center px-5 py-5">
        <h3 className="mt-1 font-fontSec capitalize underline">
          {cart.length > 1 ? 'items to be ordered' : 'item to be ordered'}
        </h3>
        {cart.map((item) => (
          <li
            key={item.id}
            className="  flex flex-wrap items-center justify-between "
          >
            <span className="text-left font-semibold">{item.quantity}</span>
            <span className="px-2 text-left uppercase">{item.name}</span>
          </li>
        ))}

        <label
          htmlFor="detail"
          className="mb-2 mt-5 font-fontLato capitalize text-blue-500"
        >
          Delivery Details
        </label>
        <input
          type="email"
          placeholder="Email"
          className=" mb-4  block w-4/5 rounded border pb-1 pl-2 pr-2 pt-1 outline-none"
        />
        <input
          type="text"
          placeholder="Phone"
          className="mb-4 block w-4/5 rounded border pb-1 pl-2 pr-2 pt-1 outline-none"
        />
        <input
          type="text"
          placeholder="Delivery Address"
          className="mb-4 block w-4/5 rounded border pb-1 pl-2 pr-2 pt-1 outline-none"
        />
        <input
          type="text"
          placeholder="Delivery State"
          className=" mb-4 block w-4/5 rounded border pb-1 pl-2 pr-2 pt-1 outline-none"
        />
        <input
          type="text"
          placeholder="Coupon Code"
          className="mb-4 block w-4/5 rounded border pb-1 pl-2 pr-2 pt-1 outline-none"
        />

        <label
          htmlFor="GrandTotal"
          className="mb-4 mt-8 flex w-4/5 flex-col flex-wrap  font-fontSec "
        >
          <span className="flex items-start justify-start gap-2 text-left">
            <i>{`Total fee for ${cart <= 1 ? 'item' : 'items'}`}:</i>
            <i>{Total}</i>
          </span>
          <span className="flex items-start justify-start gap-2 text-left">
            <i>Delivery Fee :</i>
            <i>{DELIVERYFEE}</i>
          </span>
          <div>
            <span className="block py-2 font-sans font-semibold">
              Grand Total
            </span>
            <input
              type="number"
              disabled
              value={Total + DELIVERYFEE}
              className="block w-4/5 "
            />
          </div>
        </label>

        <button
          onClick={cancel}
          className="mt-4 block w-4/5 rounded  bg-red-500 px-3 py-3 text-slate-50 hover:bg-red-900"
        >
          Want to make any changes to Order
        </button>

        <button className="mt-4 block w-4/5 rounded  bg-green-500 px-3 py-3 text-slate-50 hover:bg-green-900">{`Pay ₦${Total + DELIVERYFEE}`}</button>
      </form>
    </div>
  );
}

CheckOutUi.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      totalPrice: PropTypes.number.isRequired,
    }),
  ).isRequired,
  cancel: PropTypes.func,
};

export default CheckOutUi;
