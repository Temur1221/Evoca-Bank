import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainNav({ activeTab }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderLinks = () => {
    if (activeTab === 'anhat') {
      return (
        <>
          <Link to="/loans" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">Վարկեր</Link>
          <Link to="/cards" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">Քարտեր</Link>
          <Link to="/deposits" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">Ավանդներ</Link>
          <Link to="/accounts" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">Հաշիվներ</Link>
          <Link to="/transfers" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">Փոխանցումներ</Link>
          <Link to="/securities" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">Արժեթղթեր</Link>
          <Link to="/salary" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">EvocaSALARY</Link>
          <Link to="/touch" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">EvocaTOUCH</Link>
        </>
      );
    } else if (activeTab === 'biznes') {
      return (
        <>
          <Link to="/biznes/loans" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">Վարկեր</Link>
          <Link to="/biznes/leasing" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">Լիզինգ</Link>
          <Link to="/biznes/accounts" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">Հաշիվներ</Link>
          <Link to="/biznes/deposits" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">Ավանդներ</Link>
          <Link to="/biznes/securities" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">Արժեթղթերի շուկա</Link>
          <Link to="/biznes/trade" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">Առևտրի ֆինանսավորում</Link>
          <Link to="/biznes/trade/digital/v-pos" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">Դիջիթալ</Link>
          <Link to="/other-services" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">Այլ</Link>
        </>
      );
    } else if (activeTab === 'mer-masin') {
      return (
        <>
          {/* Այստեղ օգտագործում ենք Link դեպի /mer-masin/about */}
          <Link 
            to="/mer-masin/about" 
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap"
          >
            Evoca-ի մասին
          </Link>
          <Link to="/mer-masin/tariffs" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">Սակագներ</Link>
          <Link to="/mer-masin/reports" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">Հաշվետվություններ</Link>
          <Link to="/mer-masin/announcements" className="text-gray-800 hover:text-[#6200EE] transition whitespace-nowrap">Հայտարարություններ</Link>
        </>
      );
    }
  };

  return (
    <div className="relative bg-white border-b border-gray-100">
      <div className="flex items-center justify-between px-2 sm:px-8 py-2 sm:py-4">
        {/* Լոգո */}
        <Link to="/" className="text-2xl font-black text-gray-800 flex-shrink-0">
          <img 
            src="https://payments.evoca.am/assets/images/logo.png" 
            alt="Evoca Logo" 
            className="w-20 sm:w-28 h-auto object-contain"
          />
        </Link>

        {/* Դեսկտոպ հղումներ */}
        <div className="hidden min-[1149px]:flex items-center space-x-6 font-semibold text-sm">
          {renderLinks()}
        </div>

        {/* Մենյուի կոճակ փոքր էկրանների համար */}
        <div className="flex min-[1149px]:hidden items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-gray-100 hover:bg-gray-200 text-[#6200EE] font-bold px-3 py-1.5 rounded-lg text-xs flex items-center space-x-1.5 transition cursor-pointer"
          >
            <span>Ցանկ</span>
            <svg 
              className={`w-3.5 h-3.5 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Աջ կողմի կոճակ */}
        <button className="bg-[#6200EE] text-white font-bold px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm flex-shrink-0">
          EvocaONLINE
        </button>
      </div>

      {/* Բացվող (Dropdown) ցանկը փոքր էկրանների համար */}
      {isMenuOpen && (
        <div className="min-[1149px]:hidden absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-100 py-3 px-4 z-50">
          <div className="flex flex-col space-y-2.5 font-semibold text-xs">
            {renderLinks()}
          </div>
        </div>
      )}
    </div>
  );
}