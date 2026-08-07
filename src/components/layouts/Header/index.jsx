import { useState } from 'react';

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
    { id: 5, label: 'تماس با ما', href: '#' },
    { id: 6, label: 'مقالات', href: '#' },
  ];

  return (
    <>
      <header className="bg-transparent py-20 lg:py-27">
        <div className="container">
          <nav className="flex items-center justify-between lg:justify-start">
            <Logo />

            <ul className="mr-27 hidden items-center gap-27 lg:flex">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="hover:text-primary text-gray-800 transition duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mr-auto hidden lg:block"></div>

            <a
              href="#"
              className="bg-primary-500 hover:bg-primary-600 hidden rounded-[5px] px-25 py-10 text-white transition lg:inline-block"
            >
              ورود و ثبت نام
            </a>

            <button
              onClick={toggleMenu}
              className="hover:text-primary-500 cursor-pointer p-2 text-gray-800 transition lg:hidden"
              aria-label="منو"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6L18 18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12H21" />
                  <path d="M3 6H21" />
                  <path d="M3 18H21" />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      <div
        className={`from-primary-50/95 fixed top-0 right-0 z-[100] h-full w-full transform bg-gradient-to-br to-white/95 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-in-out sm:w-[40%] ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} lg:hidden`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 p-6">
          <h2 className="py-10 text-3xl font-bold">
            کد<span className="text-primary-500">کدا</span>
          </h2>
          <button
            onClick={closeMenu}
            className="hover:text-primary-500 cursor-pointer p-2 text-gray-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6L18 18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-25 p-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={closeMenu}
              className="hover:bg-primary-100 hover:text-primary-500 rounded-lg px-4 py-10 text-lg font-medium text-gray-700 transition"
            >
              {item.label}
            </a>
          ))}
          <div className="my-4 h-px bg-gray-200"></div>
          <a
            href="#"
            className="bg-primary-500 hover:bg-primary-600 rounded-[5px] px-25 py-10 text-center text-white transition"
          >
            ورود و ثبت نام
          </a>
        </nav>

        <div className="absolute right-0 bottom-0 left-0 border-t border-gray-100 p-6">
          <p className="text-center text-sm text-gray-400">
            © 2026 کدکدا - همه حقوق محفوظ است
          </p>
        </div>
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
