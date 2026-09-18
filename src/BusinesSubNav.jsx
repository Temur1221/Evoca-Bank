import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function BusinesSubNav() {
  const location = useLocation();

  return (
    <div className="w-full bg-[#6200EE] text-white py-3 px-8 flex items-center gap-10 shadow-sm">
      <Link 
        to="/biznes/leasing" 
        className={`font-bold text-sm tracking-wide transition-opacity ${
          location.pathname === '/biznes/leasing' ? 'border-b-2 border-white pb-1' : 'opacity-80 hover:opacity-100'
        }`}
      >
        Evoca Leasing
      </Link>
      
      <Link 
        to="/biznes/leasing/special" 
        className={`font-medium text-sm tracking-wide transition-opacity ${
          location.pathname === '/biznes/leasing/special' ? 'border-b-2 border-white pb-1' : 'opacity-80 hover:opacity-100'
        }`}
      >
        Հատուկ առաջարկ
      </Link>
    </div>
  );
}