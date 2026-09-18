import React from 'react';
import { Link } from 'react-router-dom';

export default function BusinessSubHeader() {
  // Ցանկի տվյալները կարող ես ուղղակիորեն փոխել կամ ավելացնել այստեղ
 const subNavItems = [
  { title: "Հաշիվների բացում և սպասարկում", link: "/biznes/accounts", active: false },
  { title: "Առարկայազուրկ մետաղական հաշիվներ", link: "/biznes/metal-accounts", active: true } // Այստեղ link-ը պետք է լինի /biznes/metal-accounts
];

  return (
    <div className="bg-[#6200EE] py-4 px-4 sm:px-8 shadow-inner">
      <div className="max-w-7xl mx-auto flex items-center space-x-4 overflow-x-auto scrollbar-none">
        {subNavItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
              item.active 
                ? 'bg-purple-900/60 text-white shadow-sm border border-purple-400/30' 
                : 'text-purple-100 hover:bg-purple-800/40'
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}