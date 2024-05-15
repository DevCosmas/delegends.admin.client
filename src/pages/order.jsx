/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import getToken from '../utils/getToken';
import StoreLogo from '../component/store.logo';
import { useState, useEffect } from 'react';
import { useQuery, useIsFetching } from '@tanstack/react-query';
import { BASEURLDEV, BASEURLPROD } from '../utils/constant';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { handleServerError } from '../utils/error.handler';
import Notify from '../component/notification';

function MyOrderPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [month, setMonth] = useState('');
  const [pageCount, setPageCount] = useState(1);
  const token = getToken();
  const [isLoadingGlobal, setIsLoadingGlobal] = useState(false);
  const isFetching = useIsFetching();
  const [msg, setMsg] = useState('');
  // const [newOrderToBeVerified, setNewOrderToBeVerified] = useState(null);
  const [transactionRef, setTansactionRef] = useState(null);
  const [orderObj, setOrderObj] = useState(null);

  const unverifiedOrderFromLS = localStorage.getItem('orders');
  const unverifiedOrderJSON = JSON.parse(unverifiedOrderFromLS);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoadingGlobal(isFetching > 0);
  }, [isFetching]);

  useEffect(() => {
    if (unverifiedOrderJSON.length >= 1) {
      setOrderObj(unverifiedOrderJSON);
    } else {
      setOrderObj(null);
    }
  }, [orderObj, unverifiedOrderJSON]);

  async function verifyTX(ref) {
    try {
      const response = await axios.get(`${BASEURLPROD}/verifyTx/${ref}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        console.log(response);
      }
    } catch (error) {
      console.log(error.response);
    }
  }
  // function removeItem(itemId) {
  //   const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
  //   const itemIndexToRemove = existingCart.findIndex(
  //     (item) => item.id === itemId,
  //   );

  //   if (itemIndexToRemove !== -1) {
  //     existingCart.splice(itemIndexToRemove, 1);
  //   }
  //   localStorage.setItem('cart', JSON.stringify(existingCart));
  // }
  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  async function handleRefetch(e) {
    e.preventDefault();
    await refetch();
  }
  async function increasePageCount(e) {
    e.preventDefault();
    setPageCount((prev) => prev + 1);
    await refetch();
  }

  async function decreasePageCount(e) {
    e.preventDefault();
    if (pageCount > 1) {
      setPageCount((prev) => prev - 1);
      await refetch();
    }
  }
  const {
    data: orders,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['orders', month, pageCount],
    queryFn: async ({ queryKey }) => {
      const [_, month, pageCount] = queryKey;
      try {
        const response = await axios.get(
          `${BASEURLDEV}/order/myOrder?${month !== '' ? `month=${month}` : ''}&page=${pageCount}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        return response.data.doc;
      } catch (error) {
        handleServerError(
          error.response.data,
          error.response.data.message,
          navigate,
        );
        setMsg(error.response.data.message);
        console.log(error.response);
      }
    },
    keepPreviousData: true,
  });

  const orderArray = orders || [];

  return (
    <div>
      <div className="relative mb-10  overflow-y-scroll px-2 py-2 pb-5">
        <span className="mt-8 block px-10 py-5">
          <StoreLogo />
        </span>

        {orderObj !== null && (
          <div>
            <h3 className="mx-auto mb-1 mt-10 w-72 rounded-full bg-red-600 px-6 py-2 text-center font-fontSec text-2xl uppercase text-slate-50">
              unverified order
            </h3>
            <p className="px-2 py-2 text-center text-lg font-bold capitalize">
              kindly click on the verify button to verify payment for recent
              order
            </p>
          </div>
        )}
        {orderObj !== null && (
          <div className="mb-10">
            {orderObj.map((order) => (
              <div
                className="gap4 flex flex-wrap items-center justify-between border-b px-4 py-4"
                key={order.id}
              >
                <div>
                  <sup className="rounded bg-orange-500 px-1 py-1 text-xs capitalize text-slate-50">
                    new
                  </sup>
                  <span className="ml-2 text-center text-lg capitalize">
                    {order.products.map((product) => product.name).join(',')}
                  </span>
                </div>
                <button
                  onClick={() => verifyTX(order.txRef)}
                  className="mt-5 w-40 rounded-md bg-green-500 px-2 py-2 text-center text-lg capitalize text-slate-50"
                >
                  verify
                </button>
              </div>
            ))}
          </div>
        )}
        <form onClick={(e) => handleRefetch(e)} className=" pb-10">
          <span className="mb-10 flex w-full  flex-wrap justify-start gap-4  md:w-full">
            <select
              onChange={(e) => setMonth(e.target.value)}
              name="month"
              className=" focus-visible: mx-auto w-4/5 rounded-md border-2 py-2 text-center "
            >
              <option value="">Select Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </span>

          {!isLoading && !isError && (
            <h1 className="mb-1 mt-20 text-center text-lg uppercase">
              My orders
            </h1>
          )}
          {isLoading && (
            <p className="mx-auto text-center text-red-700">
              {' '}
              Fetching Order...
            </p>
          )}
          {!isError && !isLoading && (
            <div className="overflow-y">
              {orderArray.map((order) => (
                <div
                  key={order.id}
                  className="w-90 mx-auto mb-2 rounded-md  px-4 py-4 pb-2 pl-2 pr-7 pt-2 text-lg shadow-2xl sm:w-4/5 md:w-4/5"
                >
                  <div
                    onClick={toggleFaq}
                    className="flex cursor-pointer items-center justify-between px-4 py-4 font-sans text-lg font-medium"
                  >
                    <span className="truncate">
                      {order.products
                        .map((product) => product.productName)
                        .join(',')}
                    </span>
                    <span
                      className={`${isOpen ? 'mx-10 rotate-180 text-gray-900' : 'text-emerald-500'} wi cursor-pointer text-4xl`}
                    >
                      &#9662;
                    </span>
                  </div>
                  <div
                    className={`mt-1 ${isOpen ? 'block' : 'hidden'} border-t-2 border-green-400 px-4  py-4 pb-3 text-sm`}
                  >
                    <div className="mb-2 flex flex-col flex-wrap items-start  text-lg capitalize">
                      <h3 className="font-bold">
                        Ordered
                        {order.products.length > 1 ? 'Products' : 'product'}
                      </h3>
                      {order.products.map((product, i) => (
                        <div className="marker: flex gap-8" key={i}>
                          <span>{product.productName}</span>
                          <span className="font-bold">{product.quantity}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-2 flex flex-wrap items-center justify-between text-lg capitalize">
                      <span className="font-bold">time of order</span>
                      <span>{new Date(order.createdAt).toLocaleString()}</span>
                    </div>
                    <div className="mb-2 flex flex-wrap items-center justify-between text-lg capitalize">
                      <span className="font-bold">Delivered to </span>
                      <span>
                        {order.deliveryAddress},{order.deliveryState} state
                      </span>
                    </div>
                    <div className="mb-2 flex flex-wrap items-center justify-between text-lg capitalize">
                      <span className="font-bold">contact</span>
                      <span>{order.contact}</span>
                    </div>
                    <span
                      className={`mt-4 block rounded-md px-2 py-2 text-center text-lg uppercase text-slate-50 ${order.isPaid ? 'bg-green-700' : 'bg-red-700'}`}
                    >
                      {order.isPaid ? 'paid' : 'not paid'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {isError && (
            <div className="mx-auto flex flex-col flex-wrap items-center justify-center px-2 py-2 text-xl">
              <p>{msg} 😰</p>
              <Link
                className="mt-5 w-5/6 rounded-md bg-green-700 px-4 py-4 text-center text-slate-50 hover:bg-green-300 hover:text-slate-900"
                to="/store"
              >
                Place Your Order now
              </Link>
            </div>
          )}
          {!isError && !isLoading && (
            <div className="mt-10 flex items-center justify-between pb-10">
              <button
                onClick={decreasePageCount}
                className="mx-2 rounded bg-gray-300 px-3 py-1 text-gray-700 hover:bg-gray-400"
              >
                Previous
              </button>
              <span className="text-lg font-bold">{pageCount}</span>
              <button
                onClick={increasePageCount}
                className="mx-2 rounded bg-gray-300 px-3 py-1 text-gray-700 hover:bg-gray-400"
              >
                Next
              </button>
            </div>
          )}
        </form>
      </div>
      <Notify />
    </div>
  );
}

export default MyOrderPage;
