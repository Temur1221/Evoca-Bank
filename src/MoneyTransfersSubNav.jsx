import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function MoneyTransfersSubNav() {
  const location = useLocation();

  const navItems = [
  { title: "Դրամական փոխանցումներ", path: "/money-transfers" },
  { title: "Վճարային համակարգեր", path: "/payment-systems" } // <-- Ստուգեք, որ այստեղ /payment-systems է
];

  return (
    <div className="bg-[#5c06bc] text-white w-full shadow-inner overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 flex space-x-8 py-3 whitespace-nowrap scrollbar-none">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`text-sm md:text-base font-medium transition-colors relative pb-1 no-underline hover:no-underline ${
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