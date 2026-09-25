import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function ReportsSubNav() {
  const location = useLocation();

  const subNavItems = [
    { id: 'audit', label: 'Աուդիտորական եզրակացություն', path: '/mer-masin/reports/audit' },
    { id: 'financial', label: 'Ֆինանսական հաշվետվություններ', path: '/mer-masin/reports/financial' },
    { id: 'investors', label: 'Ներդրողների համար', path: '/mer-masin/reports/investors' },
    { id: 'semiannual', label: 'Կիսամյակային հաշվետվություն', path: '/mer-masin/reports/semiannual' },
    { id: 'annual', label: 'Տարեկան հաշվետվություն', path: '/mer-masin/reports/annual' },
  ];

  return (
    <div className="bg-purple-700 shadow-md w-full overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 flex space-x-1 sm:space-x-4 py-3 whitespace-nowrap">
        {subNavItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-purple-900 text-white shadow-inner'
                  : 'text-purple-100 hover:bg-purple-600 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}