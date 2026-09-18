import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AccountSubNav() {
  const location = useLocation();

  const navItems = [
    { title: "Հաշիվների բացում և սպասարկում", path: "/accounts" },
    { title: "Առարկայազուրկ մետաղական հաշիվներ", path: "/unallocated-metal-accounts" },
    { title: "Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում", path: "/non-resident-remote" },
    { title: "Պահատուփեր", path: "/safe-deposit-boxes" }
  ];

  return (
    <div className="bg-[#5c06bc] text-white w-full shadow-inner overflow-x-auto">
      <div className="max-w-7xl mx-auto px-2 md:px-4 flex space-x-4 md:space-x-8 py-2 md:py-3 whitespace-nowrap scrollbar-none">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`text-xs md:text-base font-medium transition-colors relative pb-1 no-underline hover:no-underline max-[300px]:text-[11px] max-[300px]:px-1 ${
                isActive 
                  ? 'text-white border-b-2 border-white' 
                  : 'text-purple-200 hover:text-white'
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