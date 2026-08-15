import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function MainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTopNavMobileOpen, setIsTopNavMobileOpen] = useState(false);

  // Top Nav-ի հղումները
  const topLinks = [
    { label: 'Անհատ', path: '/anhat' },
    { label: 'Բիզնես', path: '/business' },
    { label: 'Ակնթարթային վճարումներ', path: '/payments' },
    { label: 'Մեր մասին', path: '/about' },
    { label: 'Նորություններ', path: '/news' },
    { label: 'Բլոգ', path: '/blog' },
    { label: 'Կարիերա', path: '/career' },
  ];

  // Main Nav-ի հիմնական հղումները
  const menuItems = [
    { label: 'Վարկեր', path: '/loans' },
    { label: 'Քարտեր', path: '/cards' },
    { label: 'Ավանդներ', path: '/deposits' },
    { label: 'Հաշիվներ', path: '/accounts' },
    { label: 'Փոխանցումներ', path: '/transfers' },
    { label: 'Արժեթղթեր', path: '/securities' },
    { label: 'EvocaSALARY', path: '/salary' },
    { label: 'EvocaTOUCH', path: '/touch' },
  ];

  return (
    <div className="px-4 sm:px-8 py-3 sm:py-4 bg-white relative max-[300px]:px-2 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4 xl:space-x-10 max-[300px]:space-x-1">
          
          {/* Evoca Logo -> Տանում է Գլխավոր (Home.jsx) էջ */}
          <Link to="/" className="flex items-center select-none">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-500 font-sans lowercase max-[300px]:text-lg">
              e<span className="text-[#6200EE]">v</span>oca
            </span>
          </Link>

          {/* Mobile Grid Menu Button */}
          <div className="xl:hidden relative">
            <button
              onClick={() => {
                setIsTopNavMobileOpen(!isTopNavMobileOpen);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center p-1.5 text-[#6200EE] hover:bg-purple-50 rounded-lg transition focus:outline-none cursor-pointer"
              title="Մենյու"
            >
              <svg className="w-5 h-5 max-[300px]:w-4 max-[300px]:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Mobile Dropdown */}
            {isTopNavMobileOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl py-3 px-4 z-50 border border-gray-100">
                <div className="flex flex-col space-y-2">
                  {topLinks.map((link, index) => (
                    <NavLink
                      key={index}
                      to={link.path}
                      onClick={() => setIsTopNavMobileOpen(false)}
                      className={({ isActive }) =>
                        `text-xs py-1 transition ${
                          isActive
                            ? 'text-[#6200EE] font-bold'
                            : 'text-gray-700 font-medium hover:text-[#6200EE]'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center space-x-6 xl:space-x-8 text-sm font-bold text-gray-900">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `transition whitespace-nowrap ${
                    isActive ? 'text-[#6200EE]' : 'hover:text-[#6200EE]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Կոճակ + Main Mobile Burger Icon */}
        <div className="flex items-center space-x-2 sm:space-x-4 max-[300px]:space-x-1">
          <button className="bg-[#6200EE] hover:bg-purple-700 text-white text-xs sm:text-sm font-bold px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full shadow-md transition cursor-pointer max-[300px]:px-2 max-[300px]:text-[10px]">
            <span className="max-[300px]:hidden">EvocaONLINE</span>
            <span className="hidden max-[300px]:inline">ONLINE</span>
          </button>

          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsTopNavMobileOpen(false);
            }}
            className="xl:hidden text-gray-800 hover:text-[#6200EE] focus:outline-none p-1 cursor-pointer"
          >
            <svg className="w-6 h-6 max-[300px]:w-5 max-[300px]:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="xl:hidden mt-3 pt-3 border-t border-gray-100 flex flex-col space-y-1 bg-white">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `font-bold text-sm transition py-1.5 px-2 rounded-md ${
                  isActive ? 'text-[#6200EE] bg-purple-50' : 'text-gray-900 hover:text-[#6200EE] hover:bg-gray-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}