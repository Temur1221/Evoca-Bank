import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TopNav({ activeTab, onSelectTab }) {
  const navigate = useNavigate();
  const [isApplicationsOpen, setIsApplicationsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isTopLinksOpen, setIsTopLinksOpen] = useState(false);

  const topLinks = [
    { id: 'anhat', label: 'Անհատ' },
    { id: 'biznes', label: 'Բիզնես' },
    { id: 'akntartayin', label: 'Ակնթարթային վճարումներ' },
    { id: 'mer-masin', label: 'Մեր մասին' },
    { id: 'news', label: 'Նորություններ' },
    { id: 'blog', label: 'Բլոգ' },
    { id: 'kariera', label: 'Կարիերա' },
  ];

  const applicationsItems = [
    'ՓՄՁ վարկավորում',
    'Visa Infinite',
    'MasterCard Gold',
    'Visa Gold',
  ];

  const phoneNumbers = [
    '+374 10 605555',
    '+374 98 205555',
    '+374 99 605555',
    '8444',
  ];

  const handleLinkClick = (linkId) => {
    if (linkId === 'akntartayin') {
      navigate('/instant-payments');
    } else {
      onSelectTab(linkId);
    }
  };

  return (
    <div className="flex items-center justify-between px-4 sm:px-8 py-2 text-xs text-gray-700 border-b border-gray-100 relative bg-white max-[300px]:px-1 max-[300px]:text-[10px]">
      
      {/* 1. Desktop տարբերակը */}
      <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 font-medium">
        {topLinks.map((link) => {
          const isActive = activeTab === link.id;
          return (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`cursor-pointer pb-1 transition bg-transparent border-none ${
                isActive
                  ? 'text-[#6200EE] font-bold border-b-2 border-[#6200EE]'
                  : 'text-gray-700 hover:text-[#6200EE]'
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </div>

      {/* 2. Mobile/Փոքր էկրանների տարբերակը */}
      <div className="lg:hidden relative">
        <button
          onClick={() => {
            setIsTopLinksOpen(!isTopLinksOpen);
            setIsApplicationsOpen(false);
            setIsContactOpen(false);
          }}
          className="flex items-center space-x-1 p-1 text-[#6200EE] font-bold hover:bg-purple-50 rounded-lg transition focus:outline-none"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="text-xs font-bold">Մենյու</span>
        </button>

        {isTopLinksOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl py-3 px-4 z-50 border border-gray-100">
            <div className="flex flex-col space-y-2">
              {topLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      handleLinkClick(link.id);
                      setIsTopLinksOpen(false);
                    }}
                    className={`text-left text-xs py-1 transition bg-transparent border-none cursor-pointer ${
                      isActive
                        ? 'text-[#6200EE] font-bold'
                        : 'text-gray-700 font-medium hover:text-[#6200EE]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Աջ մասի մնացած կոճակները */}
      <div className="flex items-center space-x-2 sm:space-x-6 max-[300px]:space-x-1">
        <div className="flex items-center space-x-2 sm:space-x-6 max-[300px]:space-x-1">
          
          {/* «Առցանց հայտեր» Dropdown */}
          <div className="relative inline-block text-right">
            <button
              onClick={() => {
                setIsApplicationsOpen(!isApplicationsOpen);
                setIsContactOpen(false);
                setIsTopLinksOpen(false);
              }}
              className="flex items-center space-x-0.5 sm:space-x-1 cursor-pointer text-[#6200EE] font-bold text-xs sm:text-sm focus:outline-none max-[300px]:text-[10px]"
            >
              <span>Առցանց հայտեր</span>
              <svg
                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 ${
                  isApplicationsOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isApplicationsOpen && (
              <div className="absolute left-0 lg:left-auto lg:right-0 mt-2 w-max bg-white rounded-2xl shadow-2xl py-3 px-4 sm:px-6 z-50 border border-gray-100 max-[300px]:px-3">
                <div className="flex flex-col items-end space-y-2.5">
                  {applicationsItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-gray-900 font-bold text-xs sm:text-sm hover:text-[#6200EE] transition whitespace-nowrap"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* «Հետադարձ կապ» Dropdown */}
          <div className="relative inline-block text-right">
            <button
              onClick={() => {
                setIsContactOpen(!isContactOpen);
                setIsApplicationsOpen(false);
                setIsTopLinksOpen(false);
              }}
              className="flex items-center space-x-0.5 sm:space-x-1 cursor-pointer text-[#6200EE] font-bold text-xs sm:text-sm focus:outline-none max-[300px]:text-[10px]"
            >
              <span>Հետադարձ կապ</span>
              <svg
                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 ${
                  isContactOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isContactOpen && (
              <div className="absolute right-0 mt-2 w-max bg-white rounded-2xl shadow-2xl py-4 px-4 sm:px-6 z-50 border border-gray-100 max-[300px]:px-3">
                <div className="flex flex-col items-end space-y-2.5">
                  {phoneNumbers.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="text-gray-900 font-bold text-xs sm:text-base hover:text-[#6200EE] transition whitespace-nowrap"
                    >
                      {phone}
                    </a>
                  ))}
                  <a
                    href="#"
                    className="text-gray-900 font-bold text-xs sm:text-base hover:text-[#6200EE] transition whitespace-nowrap pt-1"
                  >
                    Պատվիրել զանգ
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Իկոնաներ */}
        <div className="flex items-center space-x-1 sm:space-x-4 text-gray-800 max-[300px]:space-x-0.5">
          <button className="hover:text-[#6200EE] p-0.5 sm:p-1">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </button>
          <button className="hover:text-[#6200EE] p-0.5 sm:p-1">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
            </svg>
          </button>
          <button className="hover:text-[#6200EE] p-0.5 sm:p-1">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A8.03 8.03 0 015.08 16zm2.95-8H5.08a8.03 8.03 0 013.95-3.56A15.65 15.65 0 007.65 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14h-4.68c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-3.95 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
            </svg>
          </button>
          <button className="hover:text-[#6200EE] p-0.5 sm:p-1">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}