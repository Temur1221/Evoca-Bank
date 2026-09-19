import React from 'react';

export default function DocumentsSection() {
  return (
    <div className="w-full space-y-4 mt-10">
      {/* Բաժնի գլխավոր վերնագիր */}
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-wider">
        ՓԱՍՏԱԹՂԹԵՐ
      </h2>

      <div className="space-y-3">
        
        {/* Առաջին փաստաթուղթ */}
        <a
          href="https://www.evoca.am/files/menu/1/17551599638181.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 sm:p-5 border border-purple-100 rounded-2xl bg-white hover:border-purple-300 shadow-sm transition-all duration-200 group"
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#6200EE] group-hover:bg-[#6200EE] group-hover:text-white transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-semibold text-gray-800 text-sm sm:text-base group-hover:text-[#6200EE] transition-colors duration-200">
              Կանոնադրություն
            </span>
          </div>
          <div className="text-[#6200EE] opacity-70 group-hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
        </a>

        {/* Երկրորդ փաստաթուղթ */}
        <a
          href="https://www.evoca.am/files/menu/1/17555223060884.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 sm:p-5 border border-purple-100 rounded-2xl bg-white hover:border-purple-300 shadow-sm transition-all duration-200 group"
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#6200EE] group-hover:bg-[#6200EE] group-hover:text-white transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-semibold text-gray-800 text-sm sm:text-base group-hover:text-[#6200EE] transition-colors duration-200">
              Բանկային գործունեության լիցենզիա
            </span>
          </div>
          <div className="text-[#6200EE] opacity-70 group-hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
        </a>

        {/* Երրորդ փաստաթուղթ */}
        <a
          href="https://www.evoca.am/files/menu/1/17555223060892.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 sm:p-5 border border-purple-100 rounded-2xl bg-white hover:border-purple-300 shadow-sm transition-all duration-200 group"
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#6200EE] group-hover:bg-[#6200EE] group-hover:text-white transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-semibold text-gray-800 text-sm sm:text-base group-hover:text-[#6200EE] transition-colors duration-200">
              Բանկի Գրանցման վկայականը
            </span>
          </div>
          <div className="text-[#6200EE] opacity-70 group-hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
        </a>

      </div>
    </div>
  );
}