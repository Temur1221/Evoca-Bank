import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function AboutSubHeader() {
  const location = useLocation();

  const subNavItems = [
    { title: 'Ընդհանուր', path: '/mer-masin/about' },
    { title: 'Կառուցվածք', path: '/mer-masin/structure' },
    { title: 'Բաժնետերեր', path: '/mer-masin/shareholders' },
    { title: 'Ղեկավարություն', path: '/mer-masin/management' },
    { title: 'Գործընկերներ', path: '/partners' },
    { title: 'Մրցանակներ', path: '/mer-masin/awards' },
    { title: 'CSR', path: '/mer-masin/csr' }, // <--- Այստեղ պետք է լինի /mer-masin/csr, ոչ թե about
    { title: 'Էվոկա ֆինանսական խումբ', path: '/mer-masin/financial-group' },
  ];

  return (
    <div className="bg-[#6200EE] text-white overflow-x-auto shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex space-x-6 sm:space-x-8 py-3 text-xs sm:text-sm font-medium whitespace-nowrap scrollbar-none">
        {subNavItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`transition-colors hover:text-gray-200 pb-0.5 ${
                isActive ? 'border-b-2 border-white font-bold' : 'opacity-90'
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}