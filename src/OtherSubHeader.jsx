import React from 'react';
import { NavLink } from 'react-router-dom';

export default function OtherSubHeader() {
  return (
    <div className="bg-[#6200EE] px-8 py-4 flex items-center space-x-8 text-white font-semibold">
      <NavLink 
        to="/other-services" 
        className={({ isActive }) => 
          `pb-1 border-b-2 transition-colors ${isActive ? 'border-white text-white' : 'border-transparent text-white/80 hover:text-white'}`
        }
      >
        Պահատուփեր
      </NavLink>
      
      <NavLink 
        to="/business-money-transfers" 
        className={({ isActive }) => 
          `pb-1 border-b-2 transition-colors ${isActive ? 'border-white text-white' : 'border-transparent text-white/80 hover:text-white'}`
        }
      >
        Փոխանցումներ
      </NavLink>
    </div>
  );
}