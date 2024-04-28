// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import { BASEURLDEV } from '../utils/constant';
import Button from '../component/button.componet';
// import { Audio } from 'react-loader-spinner';
import { products } from '../utils/db';

function ProductPage() {
  // const { data: products, isLoading } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: async () => {
  //     const response = await axios.get(`${BASEURLDEV}/product/allProduct`);
  //     return response.data;
  //   },
  // });

  // const productArray = products?.doc || [];
  const productArray = products;

  // console.log(products);

  // if (isLoading) {
  //   return (
  //     <div
  //       className="h-full w-full px-64 "
  //       style={{ backdropFilter: 'blur(8px)' }}
  //     >
  //       <div className="flex h-full items-center justify-center">
  //         <Audio
  //           height={40}
  //           width={40}
  //           color="green"
  //           ariaLabel="loading"
  //           wrapperStyle={{ backdropFilter: 'none' }}
  //         />
  //       </div>
  //     </div>
  //   );
  // }

  return (
    // <div className="grid max-h-full grid-cols-4 gap-8 overflow-y-auto">
    //   {productArray.map((product) => (
    //     <div key={product.id} className="flex flex-col items-center">
    //       <div className="h-40 w-40">
    //         <img
    //           className="h-full w-full object-cover"
    //           src={product.productImage}
    //           alt={`a photo of ${product.productName}`}
    //         />
    //       </div>
    //       <p>{product.productName}</p>
    //       <p>₦{product.price}</p> {/* Displaying Naira sign */}
    //       <Button
    //         classname={` hover:bg-green-300 text-center justify-center flex  w-50 hover:text-slate-950   pt-2 pb-2 pl-4 rounded-full mt-5 ml-5 pr-4 items-center text-md bg-slate-900 text-slate-50 border-solid border-slate-900`}
    //       >
    //         <span className="shrink">Add to cart</span>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth={1.5}
    //           stroke="currentColor"
    //           className="mx-4 h-6 w-6"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    //           />
    //         </svg>
    //       </Button>
    //     </div>
    //   ))}
    // </div>

    // <div className="flex flex-wrap gap-8">
    //   {productArray.map((product) => (
    //     <span key={product.id} className="flex flex-col items-center">
    //       <span className="h-auto w-40">
    //         <img
    //           className="h-auto w-full"
    //           src={product.productImage}
    //           alt={`a photo of ${product.productName}`}
    //         />
    //       </span>
    //       <p>{product.productName}</p>
    //       <p> #{product.price}</p>
    //       <Button
    //         classname={` hover:bg-green-300 text-center justify-center flex  w-50 hover:text-slate-950   pt-2 pb-2 pl-4 rounded-full mt-5 ml-5 pr-4 items-center text-md bg-slate-900 text-slate-50 border-solid border-slate-900`}
    //       >
    //         <span className="shrink">Add to cart</span>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth={1.5}
    //           stroke="currentColor"
    //           className="mx-4 h-6 w-6"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    //           />
    //         </svg>
    //       </Button>
    //     </span>
    //   ))}
    // </div>

    <div className="flex max-h-full flex-wrap items-center gap-8 overflow-y-auto pb-40 pl-8">
      {productArray.map((product) => (
        <div key={product.id} className="">
          <div className="h-40 w-20">
            <img
              className="h-full w-full object-cover"
              src={product.productImage}
              alt={`a photo of ${product.productName}`}
            />
          </div>
          <p className="font-fontSec text-xs">{product.productName}</p>
          <p className="font-sans text-sm"> ₦{product.price}</p>
          <Button
            classname={` hover:bg-green-300 text-center justify-center flex flex-wrap  w-auto hover:text-slate-950   pt-1 pb-1 pl-2 rounded-md mt-5 pr-2 items-center text-md bg-slate-900 text-slate-50 border-solid border-slate-900`}
          >
            <span className="shrink text-xs">Add to cart</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-4 h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Button>
        </div>
      ))}
    </div>
  );
}
export default ProductPage;
