import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function BusinessSecuritiesSubHeader() {
  const location = useLocation();

  const subNavItems = [
    { title: "Ներդրումային ծառայություններ", link: "/biznes/securities" },
    { title: "Պարտատոմսեր", link: "/securities/bonds" }, // Այստեղ փոխեցինք հղումը դեպի BondsSection-ի երթուղին
    { title: "ՀԿԴ ծառայություններ", link: "/biznes/securities/hcd" },
    { title: "Ռեպո/Հակադարձ ռեպո գործարքներ", link: "/biznes/securities/repo" },
    { title: "EvocaINVEST", link: "/biznes/securities/evocainvest" }
  ];

  return (
    <div className="bg-[#6200EE] border-0 shadow-none w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-8 overflow-x-auto py-4 scrollbar-none">
          {subNavItems.map((item, index) => {
            const isActive = location.pathname === item.link;
            return (
              <Link
                key={index}
                to={item.link}
                className={`whitespace-nowrap text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-white border-b-2 border-white pb-1"
                    : "text-purple-200 hover:text-white"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}