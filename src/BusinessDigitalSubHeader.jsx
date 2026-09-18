import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function BusinessDigitalSubHeader() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-[#5B00EB] text-white py-4 px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-start space-x-8 overflow-x-auto no-scrollbar">
        
        <Link 
          to="/biznes/trade/digital/v-pos" 
          className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-purple-200 ${
            isActive('/biznes/trade/digital/v-pos') ? 'border-b-2 border-white pb-1 font-bold' : ''
          }`}
        >
          V-POS Տերմինալ
        </Link>

        <Link 
          to="/biznes/trade/digital/pos" 
          className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-purple-200 ${
            isActive('/biznes/trade/digital/pos') ? 'border-b-2 border-white pb-1 font-bold' : ''
          }`}
        >
          POS Տերմինալ
        </Link>

        <Link 
          to="/biznes/trade/digital/tariffs" 
          className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-purple-200 ${
            isActive('/biznes/trade/digital/tariffs') ? 'border-b-2 border-white pb-1 font-bold' : ''
          }`}
        >
          Սակագներ
        </Link>

        <Link 
          to="/terminal-request" 
          className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-purple-200 ${
            isActive('/terminal-request') ? 'border-b-2 border-white pb-1 font-bold' : ''
          }`}
        >
          Տերմինալի տեղադրման հայտ
        </Link>

        {/* Այստեղ արդեն գրված է /biznes/trade/digital/mpos */}
        <Link 
          to="/biznes/trade/digital/mpos" 
          className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-purple-200 ${
            isActive('/biznes/trade/digital/mpos') ? 'border-b-2 border-white pb-1 font-bold' : ''
          }`}
        >
          Evoca Mobile POS / mPOS
        </Link>

      </div>
    </div>
  );
}