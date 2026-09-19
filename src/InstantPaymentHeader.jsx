import React from 'react';

export default function InstantPaymentHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 shadow-sm">
      {/* Ձախ մաս՝ Լոգո և վերնագիր */}
      <div className="flex items-center space-x-6">
        {/* Evoca Լոգո */}
        <div className="flex items-center font-bold text-2xl tracking-tight select-none">
        <img src="https://payments.evoca.am/assets/images/logo.png"/>
        </div>
        
        {/* Բաժին կամ վերնագիր */}
        <div className="text-gray-500 text-sm font-medium">
          Online payment
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <a 
          href="tel:+37410605555" 
          className="text-[#6200EE] font-medium text-sm hover:underline"
        >
          +374 10 605555
        </a>

        {/* Լեզվի իկոնա */}
        <button className="text-gray-600 hover:text-[#6200EE] transition focus:outline-none">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </button>

        {/* «Պատմություն» կոճակ */}
        <button className="bg-[#6200EE] text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:bg-[#5000c2] transition cursor-pointer">
          Պատմություն
        </button>
      </div>
    </header>
  );
}