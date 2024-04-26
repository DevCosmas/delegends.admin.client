import Logo from '../component/logo.component';
import agroBg from './../img/agro-bg-2.jpg';
import supplementBg from './../img/supplementsBg.webp';
import Button from '../component/button.componet';
import ReviewCard from '../component/testimony.component';
import cusOne from './../img/cus-2.webp';
import cusTWo from './../img/cus-4.webp';
import cusThree from './../img/cus-9.jpg';
import cusFour from './../img/cus-8.jpg';
import cusFive from './../img/cus-7.jpg';
import cusSix from './../img/cus-6.jpg';
// import cusVii from './../img/cus-5.avif';
// import cusViii from './../img/cus-3.avif';

function HomePage() {
  return (
    <div>
      <header className="flex flex-wrap items-center justify-between px-5 pt-7 text-sm">
        <Logo></Logo>
        <nav
          className="flex
         gap-4"
        >
          <a className="text-xs capitalize hover:text-green-700" href="#">
            start shoping
          </a>
          <a className="text-xs   capitalize hover:text-green-700 " href="#">
            FAQ
          </a>
          <a className="text-xs  capitalize hover:text-green-700" href="#">
            Services
          </a>
          <a className="text-xs  capitalize hover:text-green-700" href="#">
            Contact Us
          </a>
        </nav>
      </header>
      <main>
        <div className="relative mt-9 flex grow flex-wrap items-center justify-start gap-0 px-7">
          <span className="h-70 relative w-1/2 cursor-pointer">
            <img
              src={agroBg}
              alt="agro produce"
              className="h-auto w-full"
              onMouseEnter={(e) =>
                (e.currentTarget.nextSibling.style.display = 'block')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.nextSibling.style.display = 'none')
              }
            />
            <span
              className="absolute inset-0 bg-slate-950 bg-opacity-75 p-4"
              style={{ display: 'none' }}
            >
              <p className="text-sm italic text-slate-200">
                Allow our agro product to the do work and see 50% increase in
                your agro produce. All Agro product are organically made, safe
                for humans, animal and the environment.
              </p>
            </span>
          </span>
          <span className="h-70 relative w-1/2  cursor-pointer">
            <img
              src={supplementBg}
              alt="supplement cover image"
              className="h-auto w-full"
              onMouseEnter={(e) =>
                (e.currentTarget.nextSibling.style.display = 'block')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.nextSibling.style.display = 'none')
              }
            />
            <span
              className="absolute inset-0 bg-slate-950 bg-opacity-75 p-4"
              style={{ display: 'none' }}
            >
              <p className=" align-middle text-sm italic text-green-400 ">
                Stop being reactive to your health. Be Proactive today with our
                trusted and guaranteed supplements. Organically made.
              </p>
            </span>
          </span>
        </div>
        <span className="mb-20 flex flex-wrap items-center gap-1">
          <Button
            classname={` hover:bg-green-700 flex min-w-10 pt-2 pb-2 pl-1 rounded-md mt-5 ml-5 pr-1 items-center text-sm bg-slate-900 text-slate-50 border-solid border-slate-900`}
          >
            <span className="text-xs"> Start Shopping</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </span>
          </Button>
          <Button
            classname={`  hover:stroke-slate-50  hover:bg-slate-950 hover:font-light hover:text-slate-50 hover:border-none flex min-w-10 pt-2 pb-2 pl-1 border border-green-500 rounded-md mt-5 ml-5 pr-1 items-center text-sm text-slate-950 border-solid `}
          >
            <span className="font-w text-xs font-semibold ">
              Partner with us
            </span>
            <svg
              className="h-5 w-7 stroke-slate-950  hover:stroke-slate-50"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect fill="none" height="256" width="256" />
              <path
                d="M240.7,121.8,216,134.1,184,72.9l25-12.5a7.9,7.9,0,0,1,10.6,3.4l24.6,47.1A8,8,0,0,1,240.7,121.8Z"
                fill="none"
                // stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              />
              <path
                d="M40,133.1,15.3,120.7a7.9,7.9,0,0,1-3.5-10.8L36.4,62.8A8,8,0,0,1,47,59.3L72,71.8Z"
                fill="none"
                // stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              />
              <path
                d="M216,134.1l-16,18.8-36.8,36.8a8.5,8.5,0,0,1-7.6,2.1l-58-14.5a8,8,0,0,1-2.9-1.5L40,133.1"
                fill="none"
                // stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              />
              <path
                d="M200,152.9l-44-32-12.8,9.6a32.1,32.1,0,0,1-38.4,0l-5.4-4.1a8.1,8.1,0,0,1-.9-12.1l39.2-39.1a7.9,7.9,0,0,1,5.6-2.3H184"
                fill="none"
                // stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              />
              <path
                d="M72.6,71.8l51.3-15a8,8,0,0,1,5.5.4L164,72.9"
                fill="none"
                // stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              />
              <path
                d="M112,212.9l-30.1-7.6a7.4,7.4,0,0,1-3.3-1.7L56,184"
                fill="none"
                // stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              />
            </svg>
          </Button>
        </span>

        <aside>
          <h1 className="mx-auto my-auto w-1/2 pt-2 text-center font-sans text-xl font-medium text-green-600">
            See What our Customers and Partners are saying About us
          </h1>
          <div className="mt-8 flex  gap-2 pb-5 pl-4 pt-3">
            <ReviewCard
              name="Jane Doe"
              stars={5}
              message={
                'When delegends says your order is coming to you in two hours, expect it in the next one and half. Good customer Service'
              }
              image={cusTWo}
            ></ReviewCard>
            <ReviewCard
              name="Amanda Doe"
              stars={4}
              message={`So far so good i can confirm a tremendous increase in my farm yield. It's just so amazing how this products work`}
              image={cusOne}
            ></ReviewCard>
            <ReviewCard
              name="Zara Doe"
              stars={5}
              message={
                'Melenin-Tonic is an amazing product for every melanin skin. I completely recommend for anyone'
              }
              image={cusThree}
            ></ReviewCard>
            <ReviewCard
              stars={5}
              message={
                'Since two years that i have handed over health well being to delegends store, i have not worry'
              }
              image={cusFour}
            ></ReviewCard>
            <ReviewCard
              stars={3}
              message={
                'Since two years that i have handed over health well being to delegends store, i have not worry'
              }
              image={cusFive}
            ></ReviewCard>
            <ReviewCard
              stars={5}
              message={
                'Since two years that i have handed over health well being to delegends store, i have not worry'
              }
              image={cusSix}
            ></ReviewCard>
          </div>
        </aside>
      </main>
      <footer></footer>
    </div>
  );
}

export default HomePage;
