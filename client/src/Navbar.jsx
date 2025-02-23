import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 duration-500 backdrop-blur flex-none border-b lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] supports-backdrop-blur:bg-white/60 z-10" >

      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="./icons8-5-star-hotel-96.png" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {props.title}
              </span>
            </a>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                aria-label="toggle menu"
                onClick={handleToggle} >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>

                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>

                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${isOpen ? 'block' : 'hidden'
              } lg:flex lg:items-center lg:space-x-6 absolute lg:relative inset-x-0 lg:inset-auto z-20 w-full lg:w-auto px-6 py-4 lg:p-0 bg-white dark:bg-slate-900 lg:bg-transparent lg:dark:bg-transparent transition-all duration-300 ease-in-out`}
          >
            <Link
              to="/"
              className="block px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              About
            </Link>
            <a
              href="/"
              className="block px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Services
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Contact
            </a>
            <label className="inline-flex items-center cursor-pointer mt-2 lg:mt-0 lg:ml-4">
              <input
                type="checkbox"
                name="theme_checkbox"
                className="sr-only peer"
                onChange={props.toggle}
                checked={props.theme === 'Dark'}
              />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-xs2 font-medium text-gray-900 dark:text-gray-300">
                {props.theme}
              </span>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
