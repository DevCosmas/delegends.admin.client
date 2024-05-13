/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import { BASEURLDEV } from '../utils/constant';
// import { useState } from 'react';
// import Button from '../component/button.componet';
// import { Audio } from 'react-loader-spinner';
// // import { products } from '../utils/db';
// import CartIcon from '../icons/cart';
// import SingleProductUi from '../component/single.product';
// import SignlCardUi from '../component/single.comp';
// import AddToCartUi from '../component/addCart';
// import StoreLogo from '../component/store.logo';
// function ProductPage() {
//   const [pageCount, setPageCount] = useState(1);
//   const [isProduct, setIsProduct] = useState(false);
//   const [productObj, selectProduct] = useState(null);
//   const [isCart, setIsCart] = useState(false);
//   const [productName, setProductName] = useState('');
//   const [category, setCategory] = useState('');
//   const [toggleSearchBar, setToggleSearchBar] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [errMsg, setErrMsg] = useState('');

//   function toggle() {
//     setToggleSearchBar((prevToggle) => !prevToggle);
//   }
//   function cancelToggle() {
//     if (toggleSearchBar) setToggleSearchBar(true);
//   }
//   function proceedToAddCart(product) {
//     setIsCart(true);
//     setIsProduct(false);
//     selectProduct(product);
//   }

//   function setProduct(product) {
//     setIsCart(false);
//     setIsProduct(true);
//     selectProduct(product);
//   }

//   function cancel() {
//     setIsProduct(false);
//     setIsCart(false);
//     selectProduct(null);
//   }

//   const {
//     data: products,
//     isLoading,
//     refetch,
//   } = useQuery({
//     queryKey: ['products'],
//     queryFn: async () => {
//       try {
//         const response = await axios.get(
//           `${BASEURLDEV}/product/allProduct?category=${category}&name=${productName}&page=${pageCount}`,
//         );

//         if (response.status === 200) {
//           return response.data.doc;
//         }
//       } catch (error) {
//         setIsError(true);
//         setErrMsg(error.response.data.message);
//       }
//     },
//     keepPreviousData: true,
//   });

//   async function increasePageCount() {
//     setPageCount((prev) => prev + 1);
//     await refetch();
//   }

//   async function decreasePageCount() {
//     if (pageCount > 1) {
//       setPageCount((prev) => (prev > 1 ? prev - 1 : 1));
//       await refetch();
//     }
//   }

//   const handleFilter = async (e) => {
//     e.preventDefault();
//     await refetch();
//   };

//   const productArray = products;

//   if (isLoading) {
//     return (
//       <div
//         className="mx-auto my-auto h-full w-4/5 "
//         style={{ backdropFilter: 'blur(8px)' }}
//       >
//         <div className="flex h-full items-center justify-center">
//           <Audio
//             height={40}
//             width={40}
//             color="green"
//             ariaLabel="loading"
//             wrapperStyle={{ backdropFilter: 'none' }}
//           />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className={`max-h-full overflow-auto pb-64`}>
//       <header className="flew-wrap sticky left-0 right-0 top-0 z-40 flex items-center justify-between bg-white p-4">
//         <div className={`${toggleSearchBar ? 'hidden' : ''}`}>
//           <StoreLogo></StoreLogo>
//         </div>
//         <form
//           className="flex items-center gap-4"
//           onSubmit={(e) => handleFilter(e)}
//         >
//           <div
//             className={` ${toggleSearchBar ? 'flex' : 'hidden'} min-w-4/5 flex-grow gap-3 rounded-full border border-solid border-slate-950 pr-3 md:flex`}
//           >
//             <input
//               type="text"
//               className="w-4/5 rounded-full  px-3 py-2 text-lg outline-none"
//               placeholder="Search here"
//               aria-label="Search products"
//               onChange={(e) => setProductName(e.target.value)}
//             />
//             <select
//               className={`${toggleSearchBar ? 'block' : 'hidden'} w-30 rounded-full border-none px-3  py-2 text-lg   font-bold outline-none hover:text-slate-950 md:block`}
//               aria-label="Select category"
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               <option className="text-lg hover:bg-red-500" value="">
//                 Category
//               </option>
//               <option className="text-lg" value="health">
//                 Health
//               </option>
//               <option className="text-lg" value="skin">
//                 Skin Care
//               </option>
//               <option className="text-lg" value="agro">
//                 Agro
//               </option>
//             </select>
//             <button type="submit" aria-label="Search">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className={`  w-6 text-slate-950 hover:text-green-500 focus:text-green-500 md:block md:h-6`}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//                 />
//               </svg>
//             </button>
//           </div>

//           <button onClick={toggle} type="submit" aria-label="Search">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className={`${toggleSearchBar ? 'hidden' : ''} h-6 w-6 text-slate-950 hover:text-green-500 focus:text-green-500 md:hidden `}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//               />
//             </svg>
//           </button>
//           <button
//             onClick={toggle}
//             className={`${toggleSearchBar ? 'block' : 'hidden'} rounded-sm bg-gray-300 px-1 py-1 text-gray-700 md:hidden `}
//           >
//             cancel
//           </button>
//         </form>
//       </header>
//       {!isError && (
//         <div
//           className={`${isProduct ? 'hidden' : ''} flex max-h-full flex-wrap items-center justify-start gap-8 pl-10 pr-10`}
//         >
//           {productArray.map((product) => (
//             <div
//               key={product.id}
//               className="flex grow flex-col items-center justify-center rounded-md px-8 py-8 pb-4 shadow-lg"
//             >
//               <div className="h-40 w-20">
//                 <img
//                   className="h-full w-full object-cover"
//                   src={product.productImage}
//                   alt={`a photo of ${product.productName}`}
//                 />
//               </div>
//               <a
//                 onClick={() => setProduct(product)}
//                 className="cursor-pointer font-fontSec text-sm hover:text-red-500"
//               >
//                 {product.productName}
//               </a>
//               <p className="font-sans text-lg font-semibold">
//                 {' '}
//                 ₦{product.price}
//               </p>
//               <Button
//                 onClick={proceedToAddCart}
//                 onClickParams={product}
//                 classname={` hover:bg-green-300 text-center justify-center flex flex-wrap  w-auto hover:text-slate-950   pt-1 pb-1 pl-2 rounded-md mt-5 pr-2 items-center text-md bg-slate-900 text-slate-50 border-solid border-slate-900`}
//               >
//                 <span className="shrink text-xs">Add to cart</span>
//                 <CartIcon />
//               </Button>
//             </div>
//           ))}
//         </div>
//       )}
//       {isError && (
//         <p className="mt-1/2 w-4/5 px-10 py-10 text-center text-lg font-bold uppercase text-red-500">
//           {errMsg} 😥
//         </p>
//       )}

//       <SignlCardUi isSingle={isProduct}>
//         {isProduct && (
//           <SingleProductUi
//             proceedToCart={proceedToAddCart}
//             cancel={cancel}
//             product={productObj}
//           ></SingleProductUi>
//         )}
//       </SignlCardUi>

//       <SignlCardUi isSingle={isCart}>
//         {isCart && (
//           <AddToCartUi cancel={cancel} product={productObj}></AddToCartUi>
//         )}
//       </SignlCardUi>

//       {!isError && (
//         <span
//           className={`${isProduct ? 'hidden' : ''} mt-20 flex items-center justify-between gap-4 pl-8 pr-8`}
//         >
//           <button
//             onClick={decreasePageCount}
//             className={`cursor-pointer hover:text-green-700`}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="h-6 w-6"
//               role="img"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
//               />
//             </svg>
//           </button>

//           <span className="grow border border-solid border-slate-950 text-center text-lg font-black">
//             {pageCount}
//           </span>

//           <button
//             onClick={increasePageCount}
//             className={`cursor-pointer hover:text-green-700`}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="h-6 w-6"
//               role="img"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
//               />
//             </svg>
//           </button>
//         </span>
//       )}
//     </div>
//   );
// }
// export default ProductPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASEURLDEV, BASEURLPROD } from '../utils/constant';
import { Audio } from 'react-loader-spinner';
import StoreLogo from '../component/store.logo';
import CartIcon from '../icons/cart';

import SingleProductUi from '../component/single.product';
import SignlCardUi from '../component/single.comp';
import AddToCartUi from '../component/addCart';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [pageCount, setPageCount] = useState(null);
  const [productName, setProductName] = useState(null);
  const [category, setCategory] = useState(null);

  const [isProduct, setIsProduct] = useState(false);
  const [productObj, selectProduct] = useState(null);
  const [isCart, setIsCart] = useState(false);

  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${BASEURLDEV}/product/allProduct?${
            category !== null || productName !== null
              ? `category=${category}&name=${productName}&page=${pageCount}`
              : ''
          }`,
        );
        if (response.status === 200) {
          setProducts(response.data.doc);
        }
      } catch (error) {
        setIsError(true);
        setErrMsg(error.response.data.message);
        console.log(error.response);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [pageCount, productName, category]);

  const handleFilter = async (e) => {
    e.preventDefault();
    setPageCount(1);
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${BASEURLPROD}/product/allProduct?category=${category}&name=${productName}&page=${pageCount}`,
        );
        if (response.status === 200) {
          setProducts(response.data.doc);
        }
      } catch (error) {
        console.log(error.response);
        setIsError(true);
        setErrMsg(error.response.data.message);
      }
      setIsLoading(false);
    };
    fetchData();
  };

  const increasePageCount = async () => {
    setPageCount((prev) => prev + 1);
  };

  const decreasePageCount = async () => {
    if (pageCount > 1) {
      setPageCount((prev) => prev - 1);
    }
  };

  function toggle() {
    setToggleSearchBar((prevToggle) => !prevToggle);
  }
  function cancelToggle() {
    if (toggleSearchBar) setToggleSearchBar(true);
  }
  function proceedToAddCart(product) {
    setIsCart(true);
    setIsProduct(false);
    selectProduct(product);
  }

  function setProduct(product) {
    setIsCart(false);
    setIsProduct(true);
    selectProduct(product);
  }

  function cancel() {
    setIsProduct(false);
    setIsCart(false);
    selectProduct(null);
  }

  return (
    <div className="max-h-full overflow-auto pb-64">
      <header className="flew-wrap sticky left-0 right-0 top-0 z-40 flex items-center justify-between bg-white p-4">
        <div className={`${toggleSearchBar ? 'hidden' : ''}`}>
          <StoreLogo></StoreLogo>
        </div>
        <form
          className="flex items-center gap-4"
          onSubmit={(e) => handleFilter(e)}
        >
          <div
            className={` ${toggleSearchBar ? 'flex' : 'hidden'} min-w-4/5 flex-grow gap-3 rounded-full border border-solid border-slate-950 pr-3 md:flex`}
          >
            <input
              type="text"
              className="w-4/5 rounded-full  px-3 py-2 text-lg outline-none"
              placeholder="Search here"
              aria-label="Search products"
              onChange={(e) => setProductName(e.target.value)}
            />
            <select
              className={`${toggleSearchBar ? 'block' : 'hidden'} w-30 rounded-full border-none px-3  py-2 text-lg   font-bold outline-none hover:text-slate-950 md:block`}
              aria-label="Select category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option className="text-lg hover:bg-red-500" value="">
                Category
              </option>
              <option className="text-lg" value="health">
                Health
              </option>
              <option className="text-lg" value="skin">
                Skin Care
              </option>
              <option className="text-lg" value="agro">
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
                className={`  w-6 text-slate-950 hover:text-green-500 focus:text-green-500 md:block md:h-6`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>

          <button onClick={toggle} type="submit" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${toggleSearchBar ? 'hidden' : ''} h-6 w-6 text-slate-950 hover:text-green-500 focus:text-green-500 md:hidden `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
          <button
            onClick={toggle}
            className={`${toggleSearchBar ? 'block' : 'hidden'} rounded-sm bg-gray-300 px-1 py-1 text-gray-700 md:hidden `}
          >
            cancel
          </button>
        </form>
      </header>
      {isLoading && (
        <div
          className="mx-auto my-auto h-full w-4/5"
          style={{ backdropFilter: 'blur(8px)' }}
        >
          <div className="flex h-full items-center justify-center">
            <Audio
              height={40}
              width={40}
              color="green"
              ariaLabel="loading"
              wrapperStyle={{ backdropFilter: 'none' }}
            />
          </div>
        </div>
      )}
      {!isError && (
        <div className="flex max-h-full flex-wrap items-center justify-start gap-8 pl-10 pr-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex grow flex-col items-center justify-center rounded-md px-8 py-8 pb-4 shadow-lg"
            >
              <div className="h-40 w-20">
                <img
                  className="h-full w-full object-cover"
                  src={product.productImage}
                  alt={`a photo of ${product.productName}`}
                />
              </div>
              <a
                onClick={() => setProduct(product)}
                className="cursor-pointer font-fontSec text-sm hover:text-red-500"
              >
                {product.productName}
              </a>
              <p className="font-sans text-lg font-semibold">
                {' '}
                ₦{product.price}
              </p>
              <button
                onClick={() => proceedToAddCart(product)}
                className={`text-md mt-5 flex w-auto flex-wrap  items-center justify-center rounded-md border-solid border-slate-900 bg-slate-900 pb-1 pl-2 pr-2 pt-1 text-center text-slate-50 hover:bg-green-300 hover:text-slate-950`}
              >
                <span className="shrink text-xs">Add to cart</span>
                <CartIcon />
              </button>
            </div>
          ))}
        </div>
      )}
      {isError && !isLoading && (
        <p className="mt-1/2 w-4/5 px-10 py-10 text-center text-lg font-bold uppercase text-red-500">
          {errMsg} 😥
        </p>
      )}
      <span className="mt-20 flex items-center justify-between gap-4 pl-8 pr-8">
        <button
          onClick={decreasePageCount}
          className="cursor-pointer hover:text-green-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
            role="img"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
            />
          </svg>
        </button>
        <span className="grow border border-solid border-slate-950 text-center text-lg font-black">
          {pageCount}
        </span>
        <button
          onClick={increasePageCount}
          className="cursor-pointer hover:text-green-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
            role="img"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
            />
          </svg>
        </button>
      </span>

      <SignlCardUi isSingle={isProduct}>
        {isProduct && (
          <SingleProductUi
            proceedToCart={proceedToAddCart}
            cancel={cancel}
            product={productObj}
          ></SingleProductUi>
        )}
      </SignlCardUi>

      <SignlCardUi isSingle={isCart}>
        {isCart && (
          <AddToCartUi cancel={cancel} product={productObj}></AddToCartUi>
        )}
      </SignlCardUi>
    </div>
  );
}

export default ProductPage;
