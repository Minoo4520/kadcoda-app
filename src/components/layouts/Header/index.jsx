import { useState } from 'react';

import { Link, NavLink } from 'react-router';

import Logo from './Logo';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { id: 1, label: 'خانه', href: '/' },
    { id: 2, label: 'دوره های آموزشی', href: '/archive' },
    { id: 3, label: 'دوره های حضوری', href: '/archive-online' },
    { id: 4, label: 'درباره کد کدا', href: '/about' },
    { id: 5, label: 'تماس با ما', href: '/contact' },
    { id: 6, label: 'مقالات', href: '/blog' },
  ];

  return (
    <>
      <header className="bg-transparent py-20 lg:py-27">
        <div className="container">
          <nav className="flex items-center justify-between lg:justify-start">
            <Link to="/">
              <Logo />
            </Link>

            <ul className="mx-auto hidden items-center gap-27 lg:flex">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `transition duration-200 ${
                        isActive
                          ? 'text-primary-600 border-secondary-200 border-b-2 pb-1 font-bold'
                          : 'hover:text-primary-600 text-gray-800'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Link
              to="#"
              className="bg-secondary-500 hover:bg-primary-900 hover:text-secondary-600 text-primary-900 hidden rounded-[5px] px-25 py-10 font-bold transition lg:inline-block"
            >
              ورود و ثبت نام
            </Link>

            <button
              onClick={toggleMenu}
              className="hover:text-primary-500 cursor-pointer p-2 text-gray-800 transition lg:hidden"
              aria-label="منو"
            >
              <button
                onClick={toggleMenu}
                className="hover:text-primary-500 cursor-pointer p-2 text-gray-800 transition lg:hidden"
                aria-label="منو"
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-primary-900 h-32 w-32"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-primary-900 h-32 w-32"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>{' '}
            </button>
          </nav>
        </div>
      </header>

      <div
        className={`from-primary-50/95 fixed top-0 right-0 z-[100] h-full w-full transform bg-gradient-to-br to-white/95 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-in-out sm:w-[40%] ${
          isMenuOpen
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0'
        } lg:hidden`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 p-6">
          <Link to="/" onClick={closeMenu} className="py-10 text-3xl font-bold">
            <Logo />
          </Link>
          <button
            onClick={closeMenu}
            className="text-primary-700 cursor-pointer text-4xl"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col gap-25 p-6">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.href}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-md rounded-lg px-8 py-10 font-medium transition ${
                  isActive
                    ? 'bg-primary-100 text-primary-600 border-primary-600 border-r-4 font-bold'
                    : 'hover:bg-primary-100 hover:text-primary-500 text-gray-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="my-4 h-px bg-gray-200"></div>
          <Link
            to="#"
            className="bg-primary-500 hover:bg-primary-600 rounded-[5px] px-25 py-10 text-center text-white transition"
          >
            ورود و ثبت نام
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-[90] bg-black/30 backdrop-blur-sm lg:hidden"
        />
      )}
    </>
  );
}

export default Header;
