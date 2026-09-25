import React from 'react';
import { NavLink } from 'react-router-dom';

export default function JobsSubNav() {
  const navItems = [
    { name: 'Աշխատանք Evoca-ում', path: '/jobs' },
    { name: 'Ուսումնական պրակտիկա', path: '/jobs/internship' },
    { name: 'EvocaBRIDGE', path: '/jobs/bridge' },
  ];

  return (
    <div className="w-full bg-[#5d01cc] border-b border-purple-800 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center space-x-2 sm:space-x-8 overflow-x-auto no-scrollbar py-3">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end
            className={({ isActive }) =>
              `whitespace-nowrap px-4 py-2 rounded-xl text-sm sm:text-base font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-purple-900 text-white shadow-md border border-purple-700/50'
                  : 'text-purple-200 hover:text-white hover:bg-purple-800/40'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}