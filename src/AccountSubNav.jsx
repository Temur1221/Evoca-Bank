import React from 'react';

export default function AccountSubNav() {
  const navItems = [
    { title: "Հաշիվների բացում և սպասարկում", active: true },
    { title: "Առարկայազուրկ մետաղական հաշիվներ", active: false },
    { title: "Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում", active: false },
    { title: "Պահատուփեր", active: false }
  ];

  return (
    <div className="bg-[#5c06bc] text-white w-full shadow-inner overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 flex space-x-8 py-3 whitespace-nowrap scrollbar-none">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`text-sm md:text-base font-medium transition-colors relative pb-1 ${
              item.active 
                ? 'text-white border-b-2 border-white' 
                : 'text-purple-200 hover:text-white'
            }`}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}