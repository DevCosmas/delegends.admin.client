// images
import agroBg from './../img/agro-bg-2.jpg';
import supplementBg from './../img/supplementsBg.webp';
import ReviewCard from '../component/testimony.component';
import cusOne from './../img/cus-2.webp';
import cusTWo from './../img/cus-4.webp';
import cusThree from './../img/cus-9.jpg';
import cusFour from './../img/cus-8.jpg';
import cusFive from './../img/cus-7.jpg';
import cusSix from './../img/cus-6.jpg';
import homecare from './../img/home-care.jpg';
import skincare from './../img/skincare.jpg';
import healthcare from './../img/healtcare.jpg';
import bussiness from './../img/bussiness.jpg';
import digitalcare from './../img/digitalcare.jpg';
import agrocare from './../img/agrocare.jpg';

// ui
import Logo from '../component/logo.component';
import Button from '../component/button.componet';
import { PrevArrow, NextArrow } from '../component/arrows';
import Slider from 'react-slick';
import FaqUi from '../component/faq.component';
import ServiceUi from '../component/services.component';
import { useState } from 'react';

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow className={`bg-green-800 text-slate-50`} />,
    prevArrow: <PrevArrow />,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <header className="flex flex-wrap items-center justify-between px-5 pt-7 text-sm">
        <Logo></Logo>
        <nav
          className="hidden
         gap-4 sm:flex"
        >
          <a className="text-sm capitalize hover:text-green-700" href="#">
            start shoping
          </a>
          <a className="text-sm   capitalize hover:text-green-700 " href="#">
            FAQ
          </a>
          <a className="text-sm  capitalize hover:text-green-700" href="#">
            Services
          </a>
          <a className="text-sm  capitalize hover:text-green-700" href="#">
            Contact Us
          </a>
        </nav>

        <div className="relative">
          <span onClick={() => toggleMenu()} className="flex sm:hidden">
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
          {isMenuOpen && (
            <div className="fixed bottom-0 right-0 top-0 z-40 h-full w-full">
              <span className="flex h-full w-full ">
                <div className="  h-full w-1/2 backdrop-blur-sm"></div>
                <ul
                  className={` h-full w-1/2 bg-green-900 
                  pt-2 text-left font-fontSec text-slate-50`}
                >
                  <span
                    onClick={() => closeMenu()}
                    className=" mb-1 block pr-5 text-right font-sans text-xl hover:text-gray-500"
                  >
                    X
                  </span>
                  <li className=" mb-1 w-full pb-2 pl-4 pt-2 hover:bg-slate-50 hover:text-slate-950">
                    <a href="">Start Shopping</a>
                  </li>
                  <li className=" mb-1 w-full pb-2 pl-4 pt-2 hover:bg-slate-50 hover:text-slate-950">
                    <a href="">FAQ</a>
                  </li>
                  <li className=" mb-1 w-full pb-2 pl-4 pt-2 hover:bg-slate-50 hover:text-slate-950">
                    <a href="">Services</a>
                  </li>
                  <li className=" mb-1 w-full pb-2 pl-4 pt-2 hover:bg-slate-50 hover:text-slate-950">
                    <a href="">Contact us</a>
                  </li>
                </ul>
              </span>
            </div>
          )}
        </div>
      </header>
      <main>
        <div className="relative mt-9 flex grow flex-wrap items-center justify-start gap-0 px-7">
          <span className="h-70 relative w-1/2 cursor-pointer md:shrink-0">
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
              <p className="pt-14 font-lobster text-lg font-thin text-slate-200">
                Allow our agro product to the do work and see 50% increase in
                your agro produce. All Agro product are organically made, safe
                for humans, animal and the environment.
              </p>
            </span>
          </span>
          <span className="h-70 relative w-1/2  cursor-pointer md:shrink-0">
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
              <p className=" pt-14 align-middle font-lobster text-lg font-thin text-green-400 ">
                Stop being reactive to your health. Be Proactive today with our
                trusted and guaranteed supplements. Organically made.
              </p>
            </span>
          </span>
        </div>
        {/* <span className="mb-20 flex flex-wrap items-center gap-1">
          <Button
            classname={` hover:bg-green-700 flex md:max-w-4/5 sm:min-w-10 w-1/2 pt-2 pb-2 pl-1 rounded-md mt-5 ml-5 pr-1 items-center text-sm bg-slate-900 text-slate-50 border-solid border-slate-900`}
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
        </span> */}
        <div className="flex flex-wrap items-center gap-1">
          <Button classname="hover:bg-green-700 flex w-4/5 md:w-60 pt-2 pb-2 pl-1 rounded-md mt-5 ml-5 pr-1 items-center text-sm bg-slate-900 text-slate-50 border-solid border-slate-900">
            <span className="px-4 text-sm"> Start Shopping</span>
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
          <Button classname="hover:stroke-slate-50 text-center px-4 hover:bg-slate-950 hover:font-light hover:text-slate-50 hover:border-none flex min-w-10 pt-2 pb-2 pl-1 border border-green-500 rounded-md mt-5 ml-5 pr-1 items-center text-lg text-slate-950 border-solid  w-4/5 md:w-60">
            <span className="font-w px-4 text-sm font-semibold">
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
        </div>

        <div className="overflow-hidden pl-5">
          <h1 className=" mx-auto my-auto mt-5 w-full  pl-3 pr-3 pt-5 text-center font-sans text-xl font-medium text-green-600 max-md:text-center  max-sm:text-left">
            See What our Customers and Partners are saying About us
          </h1>
        </div>
        <span className=" pl-10">
          <Slider {...settings}>
            <ReviewCard
              name="Jane Doe"
              stars={5}
              message={
                'When delegends says your order is coming to you in two hours, expect it in the next one and half hour. Good customer Service'
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
          </Slider>
        </span>
        <div className="mt-10 pl-10">
          <h1 className="mb-4 w-6  border-b-4 border-green-600 font-marcellus">
            FAQ
          </h1>
          <FaqUi
            answer="Expected time for all orders to be delivered will be communicated to the customer. Distance will be a major factor. The shorter the distance the shorter the delivery time"
            question="How long does my order take to get to me ?"
          />
          <FaqUi
            question="How do i partner?"
            answer="To partner with the delegends store is a very simple and straight forward procedure. You can find the partner with us button above on the website, click and fill in the blank. Then an admin will get back to you shortly for further interview."
          />
          <FaqUi
            answer="There will be no refund of money for any completed transaction with delegends store."
            question="Refund Policy?"
          />
        </div>

        <div className="mt-10 overflow-hidden pl-10">
          <h1 className="mb-4 w-6  border-b-4 border-green-600 font-marcellus">
            Services
          </h1>
          <Slider {...settings}>
            <ServiceUi name="Home care produtcs" image={homecare}></ServiceUi>
            <ServiceUi name="Skin care Products" image={skincare}></ServiceUi>
            <ServiceUi name="Health Products" image={healthcare}></ServiceUi>

            <ServiceUi name="Agro Consultant" image={agrocare}></ServiceUi>
            <ServiceUi
              name="Digital Marketing Consultant"
              image={digitalcare}
            ></ServiceUi>
            <ServiceUi
              name="Bussiness PartnerShip"
              image={bussiness}
            ></ServiceUi>
          </Slider>
        </div>

        <div className="mt-10 w-full overflow-hidden pl-10">
          <h1 className="mb-4 w-10  border-b-4 border-green-600 font-marcellus">
            Contact Us
          </h1>
          <div
            className="flex
           flex-wrap items-center gap-8 font-marcellus text-xs"
          >
            <div className=" max-w-[200px]">
              <h3 className="mb-2 font-semibold uppercase">head office</h3>
              <span className=" font-fontSec">
                Plot 12 Chief Olu Oshunkeye Crescents - Gbagada Industrial
                Estate - Gbagada Lagos
              </span>
            </div>
            <div className=" max-w-[200px]">
              <h3 className="mb-2 font-semibold uppercase">Abuja office</h3>
              <span className="w-8 font-fontSec">
                wuse, oposite nnpc towers bassan plaze, Abuja{' '}
              </span>
            </div>
          </div>
          <span className="mt-5 flex items-center gap-4">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 50 50"
              >
                <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 50 50"
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 50 50"
              >
                <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z"></path>
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#4caf50"
                  d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                ></path>
                <path
                  fill="#1e88e5"
                  d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                ></path>
                <polygon
                  fill="#e53935"
                  points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                ></polygon>
                <path
                  fill="#c62828"
                  d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                ></path>
                <path
                  fill="#fbc02d"
                  d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                ></path>
              </svg>
            </a>
          </span>
        </div>
      </main>

      <footer className="mt-8 border border-t-slate-950 pb-4 pl-10 pt-4 text-sm">
        &copy;<span className="text-xs"> Delegends Store 2024</span>
      </footer>
    </div>
  );
}

export default HomePage;
