import React, { useState } from 'react';
import HistorySwiper from './HistorySwiper';

export default function HistorySection({ historyTitle, historySlides }) {
  const [activeYearIndex, setActiveYearIndex] = useState(0);
  
  // Հաստատուն տարեթվեր
  const years = ['2026', '2025', '2024', '2023', '2022', '2021'];

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
        {historyTitle || 'Բանկի պատմությունը'}
      </h2>

      {/* Ժամանակացույցի գիծը և տարեթվերը */}
      <div className="relative max-w-3xl mx-auto mb-14 px-4">
        {/* Հորիզոնական գիծը (դրված է կետերի տակով) */}
        <div className="absolute top-[32px] left-8 right-8 h-[2px] bg-gray-200 z-0"></div>

        {/* Տարեթվերի շարքը */}
        <div className="relative z-10 flex items-center justify-between">
          {years.map((year, idx) => (
            <button
              key={idx}
              onClick={() => setActiveYearIndex(idx)}
              className="group flex flex-col items-center focus:outline-none cursor-pointer"
            >
              {/* Տարեթիվ */}
              <span className={`font-bold text-sm sm:text-base mb-2 transition-colors ${
                activeYearIndex === idx ? 'text-[#6200EE]' : 'text-gray-400 group-hover:text-gray-600'
              }`}>
                {year}
              </span>

              {/* Կետը */}
              <span className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                activeYearIndex === idx 
                  ? 'bg-[#6200EE] border-[#6200EE] ring-4 ring-purple-100' 
                  : 'bg-white border-gray-300 group-hover:border-gray-400'
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* Swiper բլոկը, որը բերում է տեքստն ու նկարը Firestore-ից */}
      <HistorySwiper 
        historySlides={historySlides}
        activeYearIndex={activeYearIndex}
        onSlideChange={(index) => setActiveYearIndex(index)}
      />
    </div>
  );
}