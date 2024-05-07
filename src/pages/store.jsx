// import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeIcon from '../icons/home.icon';
import CartIcon from '../icons/cart';
import OrderIcon from '../icons/order.icon';

function StorePage({ cartNum }) {
  function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
  }

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useLocalStorage('user', null);

  return (
    <div>
      <main className="relative">
        <div className=" fixed bottom-0 right-0 top-0 z-40 h-full w-full">
          <span className="flex h-full w-full">
            <aside className=" hidden h-full w-60 bg-green-900 pl-5 pt-2 md:block">
              <span className="mx-auto  mt-4 flex flex-col items-center justify-center pt-4 text-center text-slate-50">
                <p>Welcome 🙌 {user.username}</p>
                <img
                  className="my-4 mb-5 inline-block h-10 w-10 rounded-full"
                  src={user.profilePic}
                  alt="Customer profile pics"
                />
              </span>
              <ul className="w-full list-none pr-8 font-marcellus text-lg capitalize text-slate-50">
                <li className="my-3 flex items-center gap-2 rounded-sm pb-2 pl-5 pr-5 pt-2 hover:bg-green-300 hover:text-slate-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-7 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>

                  <Link to={'/store'}>
                    <span>product</span>
                  </Link>
                </li>
                <li className="my-3 flex items-center gap-2 rounded-sm pb-2 pl-5 pr-5 pt-2 hover:bg-green-300 hover:text-slate-900">
                  <OrderIcon></OrderIcon>

                  <Link to={'/store/my_order'}>
                    <span
                    // className={`${newOrder ? ` after:ml-0.5 after:text-yellow-300 after:content-['*']` : ''}`}
                    >
                      my order
                    </span>
                  </Link>
                </li>
                <li className="my-3 flex items-center gap-2 rounded-sm pb-2 pl-5 pr-5 pt-2 hover:bg-green-300 hover:text-slate-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-7 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>

                  <Link to={'/store/my_cart'}>
                    <span>
                      my cart{' '}
                      {cartNum !== 0 && (
                        <sup className="rounded-full bg-red-800 p-1 text-center text-xs text-slate-50">
                          {cartNum}
                        </sup>
                      )}
                    </span>
                  </Link>
                </li>
                <li className="my-3 flex items-center gap-2 rounded-sm pb-2 pl-5 pr-5 pt-2 hover:bg-green-300 hover:text-slate-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-7 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                    />
                  </svg>
                  <span>logout</span>
                </li>
              </ul>
            </aside>
            <div className="w relative flex-1 overflow-y-scroll border-solid border-red-500">
              <Outlet></Outlet>
            </div>
          </span>
          <nav className="top-100 absolute bottom-0 left-0 right-0 z-40 mt-40 bg-green-700 px-2 py-4 capitalize text-slate-50 md:hidden">
            <div
              className="flex
           items-center justify-center gap-8"
            >
              <NavLink to={'/store'}>
                <span className="flex flex-col items-center justify-center hover:text-slate-300">
                  <HomeIcon></HomeIcon>
                  <p>Home</p>
                </span>
              </NavLink>
              <NavLink to={'/store/my_cart'}>
                <span className="flex flex-col items-center justify-center hover:text-slate-300">
                  <span
                    className="flex gap-0
                  "
                  >
                    <CartIcon></CartIcon>
                    {cartNum !== 0 && (
                      <sup className="mx-0 min-h-2 min-w-2 rounded-full bg-red-800 px-1 py-1 text-center text-xs text-slate-50">
                        {cartNum}
                      </sup>
                    )}
                  </span>
                  <p>cart</p>
                </span>
              </NavLink>
              <NavLink to={'/store/my_order'}>
                <span className="flex flex-col items-center justify-center hover:text-slate-300">
                  <OrderIcon></OrderIcon>
                  <p>orders</p>
                </span>
              </NavLink>
              <span className="flex flex-col items-center justify-center hover:text-slate-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>

                <p>me</p>
              </span>
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
}

StorePage.propTypes = {
  cartNum: PropTypes.number.isRequired,
  user: PropTypes.object,
};

export default StorePage;
