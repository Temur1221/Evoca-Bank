import React from 'react';

export default function FactoringDocuments() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-4 text-gray-800">
      
      {/* Բաժնի վերնագիր */}
      <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
        Փաստաթղթեր
      </h3>

      {/* Փաստաթղթի տուփ (Card) */}
      <div className="bg-[#F8F7FC] border border-purple-100/80 rounded-2xl p-4 sm:p-5 flex items-center space-x-4 shadow-sm transition hover:shadow-md">
        
        {/* Ֆայլի նշան (Icon) */}
        <div className="text-[#6200EE] flex-shrink-0">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-8 h-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="1.8"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
        </div>

        {/* Փաստաթղթի հղում / անվանում */}
        <a 
          href="https://www.evoca.am/files/global_files/1/information-summary-loan-07-04-2026.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base font-semibold text-[#6200EE] hover:underline leading-snug"
        >
          Տեղեկատվական ամփոփագիր (Վարկային պրոդուկտներ) 07.04.2026
        </a>

      </div>

    </div>
  );
}