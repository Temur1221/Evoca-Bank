import React from "react";
import { Link } from "react-router-dom";

export default function SubHeader() {
  return (
    <div className="bg-[#6200EE] w-full py-3.5 px-6 md:px-12 flex items-center text-white text-sm md:text-base font-medium">
      <div className="max-w-[1280px] w-full mx-auto flex items-center space-x-8">
        {/* Ավանդներ հղում */}
        <Link 
          to="/deposits" 
          className="font-bold opacity-100 no-underline hover:no-underline"
        >
          Ավանդներ
        </Link>

        {/* Կարևոր տեղեկատվություն հղում */}
        <Link 
          to="/deposits-important-info" 
          className="opacity-80 hover:opacity-100 transition-opacity no-underline hover:no-underline"
        >
          Կարևոր տեղեկատվություն
        </Link>
      </div>
    </div>
  );
}