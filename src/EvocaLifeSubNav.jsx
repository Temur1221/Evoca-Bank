import React from 'react';
import { Link } from 'react-router-dom';

export default function EvocaLifeSubNav({ activeSubTab, onSelectSubTab }) {
  return (
    <div className="bg-[#6200EE] py-3 px-4 sm:px-8 shadow-inner overflow-x-auto">
      <div className="max-w-7xl mx-auto flex items-center space-x-6 sm:space-x-10 min-w-max">
         <Link
          to="/kariera/culture"
          className={`cursor-pointer text-xs sm:text-sm font-semibold transition no-underline pb-1 ${
            activeSubTab === 'Մշակույթ'
              ? 'text-white border-b-2 border-white'
              : 'text-purple-200 hover:text-white'
          }`}
        >
          Մշակույթ
        </Link>

        {/* Առավելություններ Link */}
        <Link
          to="/advantages"
          className={`cursor-pointer text-xs sm:text-sm font-semibold transition no-underline pb-1 ${
            activeSubTab === 'Առավելություններ'
              ? 'text-white border-b-2 border-white'
              : 'text-purple-200 hover:text-white'
          }`}
        >
          Առավելություններ
        </Link>

        {/* Հաճախ տրվող հարցեր Link (Փոխարինված է button-ից) */}
        <Link
          to="/faq"
          className={`cursor-pointer text-xs sm:text-sm font-semibold transition no-underline pb-1 ${
            activeSubTab === 'Հաճախ տրվող հարցեր'
              ? 'text-white border-b-2 border-white'
              : 'text-purple-200 hover:text-white'
          }`}
        >
          Հաճախ տրվող հարցեր
        </Link>

      <Link 
        to="/how-to-apply"
        className="text-white font-medium hover:text-purple-200 transition-colors bg-purple-800/60 px-4 py-2 rounded-xl border border-purple-700/50"
      >
        Ինչպես ընդունվել աշխատանքի Evocabank-ում
      </Link>

      </div>
    </div>
  );
}