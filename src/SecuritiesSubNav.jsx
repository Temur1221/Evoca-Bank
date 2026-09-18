import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SecuritiesSubNav() {
  return (
    <div style={{ backgroundColor: '#4A00E0' }} className="border-b border-purple-700 py-4 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-6 text-sm sm:text-base font-medium">
        
        <NavLink 
          to="/securities" 
          end
          className={({ isActive }) => 
            isActive 
              ? "text-white border-b-2 border-white pb-1 font-semibold" 
              : "text-purple-200 hover:text-white transition-colors"
          }
        >
          Ներդրումային ծառայություններ
        </NavLink>

        <NavLink 
          to="/securities/bonds" 
          className={({ isActive }) => 
            isActive 
              ? "text-white border-b-2 border-white pb-1 font-semibold" 
              : "text-purple-200 hover:text-white transition-colors"
          }
        >
          Պարտատոմսեր
        </NavLink>

        <NavLink 
          to="/securities/hcd" 
          className={({ isActive }) => 
            isActive 
              ? "text-white border-b-2 border-white pb-1 font-semibold" 
              : "text-purple-200 hover:text-white transition-colors"
          }
        >
          ՀԿԴ ծառայություններ
        </NavLink>

        <NavLink 
          to="/securities/repo" 
          className={({ isActive }) => 
            isActive 
              ? "text-white border-b-2 border-white pb-1 font-semibold" 
              : "text-purple-200 hover:text-white transition-colors"
          }
        >
          Ռեպո/Հակադարձ Ռեպո գործարքներ
        </NavLink>

        <NavLink 
          to="/securities/evocainvest" 
          className={({ isActive }) => 
            isActive 
              ? "text-white border-b-2 border-white pb-1 font-semibold" 
              : "text-purple-200 hover:text-white transition-colors"
          }
        >
          EvocaINVEST
        </NavLink>

      </div>
    </div>
  );
}