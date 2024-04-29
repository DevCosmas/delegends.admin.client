// import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import StoreLogo from '../component/store.logo';
import cusThree from './../img/cus-9.jpg';

function StorePage() {
  const newOrder = true;
  const newCart = true;

  return (
    <div>
      <main className="relative">
        <div className=" fixed bottom-0 right-0 top-0 z-40 h-full w-full">
          <span className="flex h-full w-full">
            <aside className=" h-full w-60 bg-green-900 pl-5 pt-2">
              <span className="mx-4  mt-4 pt-4 text-center">
                <img
                  className="my-4 mb-5 inline-block h-10 w-10 rounded-full"
                  src={cusThree}
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
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>

                  <Link to={'/store'}>
                    <span
                      className={` after:ml-0.5 after:text-yellow-300 after:content-['*']`}
                    >
                      product
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
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>

                  <Link to={'/store/my_order'}>
                    <span
                      className={`${newOrder ? ` after:ml-0.5 after:text-yellow-300 after:content-['*']` : ''}`}
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
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>

                  <Link to={'/store/my_cart'}>
                    <span
                      className={`${newCart ? ` after:ml-0.5 after:text-yellow-300 after:content-['*']` : ''}`}
                    >
                      my cart
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
                    className="h-4 w-4"
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
            <div className="w flex-1  border-solid border-red-500">
              <header
                className="mb-8 flex items-center justify-between gap-10 pb-4 pl-8 pr-8 pt-4
      "
              >
                <StoreLogo></StoreLogo>
                <form className="flex items-center gap-4">
                  <div className="flex-grow">
                    <input
                      type="text"
                      className="w-full rounded-full border border-solid border-slate-950 px-3 py-2 text-xs outline-none"
                      placeholder="Search here"
                      aria-label="Search products"
                    />
                  </div>
                  <select
                    className="rounded-full border-none px-3 py-2 text-xs outline-none  hover:text-green-300"
                    aria-label="Select category"
                  >
                    <option className="text-xs hover:bg-red-500" value="">
                      Category
                    </option>
                    <option className="text-xs" value="health">
                      Health
                    </option>
                    <option className="text-xs" value="skin-care">
                      Skin Care
                    </option>
                    <option className="text-xs" value="agro">
                      Agro
                    </option>
                  </select>

                  <button type="submit" aria-label="Search">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-slate-950 hover:text-green-500 focus:text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </button>
                </form>
              </header>
              <Outlet></Outlet>
            </div>
          </span>
        </div>
      </main>
    </div>
  );
}
export default StorePage;
