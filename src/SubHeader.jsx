import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SubHeader() {
  const location = useLocation();

  return (
    <div className="bg-[#6200EE] w-full py-3.5 px-6 md:px-12 flex items-center text-white text-sm md:text-base font-medium">
      <div className="max-w-[1280px] w-full mx-auto flex items-center space-x-8">
        
        {/* Ավանդներ հղում */}
        <Link 
          to="/deposits" 
          className={`no-underline hover:no-underline transition-opacity ${
            location.pathname === "/deposits" 
              ? "font-bold opacity-100 underline underline-offset-8" 
              : "opacity-80 hover:opacity-100"
          }`}
        >
          Ավանդներ
        </Link>

        {/* Կարևոր տեղեկատվություն հղում */}
        <Link 
          to="/important-info" 
          className={`no-underline hover:no-underline transition-opacity ${
            location.pathname === "/important-info" 
              ? "font-bold opacity-100 underline underline-offset-8" 
              : "opacity-80 hover:opacity-100"
          }`}
        >
          Կարևոր տեղեկատվություն
        </Link>

      </div>
    </div>
  );
}