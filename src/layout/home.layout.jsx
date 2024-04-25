import Logo from '../component/logo.component';
import agroBg from './../img/agro-bg-2.jpg';
import supplementBg from './../img/supplementsBg.webp';
import Button from '../component/button.componet';
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
        <div className="relative mt-9 flex items-center justify-start gap-0 px-7">
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
              <p className="text-sm italic text-green-400">
                Stop being reactive to your health. Be Proactive today with our
                trusted and guaranteed supplements. Organically made.
              </p>
            </span>
          </span>
        </div>
        <span>
          <Button>
            <span> Start Shopping</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </span>
          </Button>
          <Button> Partner with us</Button>
        </span>
      </main>
      <footer></footer>
    </div>
  );
}

export default HomePage;
