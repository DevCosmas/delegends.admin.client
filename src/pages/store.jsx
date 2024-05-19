/* eslint-disable no-unused-vars */

// import { useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  Link,
  useNavigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { useState } from 'react';
import HomeIcon from '../icons/home.icon';
import CartIcon from '../icons/cart';
import OrderIcon from '../icons/order.icon';
import SettingIcon from '../icons/setting';
import LogoutIcon from '../icons/logout.icon';
import { useAuth } from '../context/user.context';
import ChatIcon from '../icons/chat..icon';
import { MY_NUMBER } from '../utils/constant';

function StorePage({ cartNum }) {
  const { pathname } = useLocation();
  const { useLocalStorage } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const navigateSetting = () => {
    closeMenu();
    navigate('user_setting');
  };

  function activeLink(type = null) {
    var className = `bg-green-300 text-slate-900`;
    var page =
      pathname.split('/').length > 2
        ? pathname.split('/')[2]
        : pathname.split('/')[1];

    if (type === page) {
      return className;
    } else {
      return null;
    }
  }

  const [user, setUser] = useLocalStorage('user', null);

  return (
    <div>
      <main className="relative">
        <div className=" fixed bottom-0 right-0 top-0 z-40 h-full w-full">
          <span className="flex h-full w-full">
            <aside className=" hidden h-full w-60 bg-green-900 pl-5 pt-2 md:flex md:flex-col md:items-start md:justify-start">
              <span className="mx-auto  mt-4 flex flex-col items-center justify-center pt-4 text-center text-slate-50">
                <p>Welcome 🙌 {user.username}</p>
                <div className="my-4 mb-5 h-20 w-20 rounded-full border-2 border-slate-50 px-1 py-1">
                  <img
                    className="h-full w-full rounded-full "
                    src={user.profilePic}
                    alt="Customer profile pic"
                  />
                </div>
              </span>
              <ul className="w-full list-none pr-8 font-marcellus text-lg capitalize text-slate-50">
                <li
                  className={`my-3 flex items-center gap-2 rounded-sm pb-2 pl-5 pr-5 pt-2 hover:bg-green-300 hover:text-slate-900 ${activeLink('store')}`}
                >
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

                  <NavLink to={'/store'}>
                    <span>product</span>
                  </NavLink>
                </li>
                <li
                  className={`my-3 flex items-center gap-2 rounded-sm pb-2 pl-5 pr-5 pt-2 hover:bg-green-300 hover:text-slate-900 ${activeLink('my_order')}`}
                >
                  <OrderIcon></OrderIcon>

                  <NavLink to={'/store/my_order'}>
                    <span>my order</span>
                  </NavLink>
                </li>
                <li
                  className={`my-3 flex items-center gap-2 rounded-sm pb-2 pl-5 pr-5 pt-2 hover:bg-green-300 hover:text-slate-900 ${activeLink('my_cart')}`}
                >
                  <div className="relative mr-2">
                    {cartNum !== 0 && (
                      <sup className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-red-800 p-1 px-2 py-1 text-center text-xs text-slate-50">
                        {cartNum}
                      </sup>
                    )}
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
                  </div>
                  <NavLink to={'/store/my_cart'} className="relative">
                    <span>my cart </span>
                  </NavLink>
                </li>
                <NavLink to={'user_setting'}>
                  <li
                    className={`my-3 flex items-center gap-2 rounded-sm pb-2 pl-5 pr-5 pt-2 hover:bg-green-300 hover:text-slate-900 ${activeLink('user_setting')}`}
                  >
                    <SettingIcon />
                    <span>Setting</span>
                  </li>
                </NavLink>
                <NavLink>
                  <li className="my-3 flex items-center gap-2 rounded-sm pb-2 pl-5 pr-5 pt-2 hover:bg-green-300 hover:text-slate-900">
                    <LogoutIcon />
                    <span>logout</span>
                  </li>
                </NavLink>
              </ul>
            </aside>
            <div className="w flex-1 overflow-y-scroll border-solid border-red-500">
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
                  <div
                    className={`${activeLink('store')} rounded-full px-1 py-1`}
                  >
                    <HomeIcon></HomeIcon>
                  </div>
                  <p>Home</p>
                </span>
              </NavLink>
              <NavLink to={'/store/my_cart'}>
                <span className="flex flex-col items-center justify-center hover:text-slate-300">
                  <span
                    className="flex gap-0
                  "
                  >
                    <div
                      className={`${activeLink('my_cart')} item-center
                      flex rounded-full px-1 py-1`}
                    >
                      <CartIcon></CartIcon>
                      {cartNum !== 0 && (
                        <sup className="ml-[-20px] flex h-4 w-4 items-center justify-center rounded-full bg-red-800 px-2 py-2 text-xs text-slate-50">
                          {cartNum}
                        </sup>
                      )}
                    </div>
                  </span>
                  <p>cart</p>
                </span>
              </NavLink>
              <NavLink to={'/store/my_order'}>
                <span className="flex flex-col items-center justify-center hover:text-slate-300">
                  <div
                    className={`${activeLink('my_order')} item-center
                      flex rounded-full px-1 py-1`}
                  >
                    <OrderIcon></OrderIcon>
                  </div>
                  <p>orders</p>
                </span>
              </NavLink>
              <span
                onClick={() => toggleMenu()}
                className="flex flex-col items-center justify-center hover:text-slate-300"
              >
                <div
                  className={`  item-center flex h-10
                      w-10 rounded-full border-2 border-slate-50 px-1 py-1`}
                >
                  <img
                    className="h-full w-full rounded-full"
                    src={user.profilePic}
                    alt="user profile picture"
                  />
                </div>
                <p>me</p>
              </span>
            </div>
            {isMenuOpen && (
              <div className="fixed bottom-0 right-0 top-0 z-40 h-full w-full">
                <span className="flex h-full w-full ">
                  <div className="  h-full w-40 backdrop-blur-sm"></div>
                  <ul
                    className={` h-full w-4/5 bg-green-900 px-2 py-2 
                  pt-2 text-left font-fontSec text-slate-50`}
                  >
                    <span
                      onClick={() => closeMenu()}
                      className=" mb-1 block py-5 pr-6 text-right font-sans text-xl hover:text-gray-500"
                    >
                      X
                    </span>
                    <li className=" mb-1 flex w-full flex-wrap gap-2 rounded-md pb-2 pl-4 pt-2 hover:bg-slate-50 hover:text-slate-950">
                      <div
                        onClick={navigateSetting}
                        className="flex flex-wrap items-center gap-2"
                      >
                        <SettingIcon />
                        <span>Setting</span>
                      </div>
                    </li>
                    <li className="  mb-1 flex w-full flex-wrap gap-2 rounded-md px-3 py-2 hover:bg-slate-50 hover:text-slate-950">
                      <LogoutIcon />
                      <span>Logout</span>
                    </li>
                  </ul>
                </span>
              </div>
            )}
          </nav>
        </div>
      </main>
      <a
        href={`https://wa.me/${MY_NUMBER}`}
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-10 right-10 z-30 h-16 w-16 rounded-full bg-slate-50 hover:bg-green-100"
      >
        <div className="flex h-full w-full items-center justify-center">
          <ChatIcon />
        </div>
      </a>
    </div>
  );
}

StorePage.propTypes = {
  cartNum: PropTypes.number.isRequired,
  user: PropTypes.object,
};

export default StorePage;
