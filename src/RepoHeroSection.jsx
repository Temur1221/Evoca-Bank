import React from 'react';

export default function RepoHeroSection({ data }) {
  return (
    <div className="bg-[#F8F5FB] border border-[#EBE1F5] rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
      <div className="space-y-6 max-w-xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
          {data?.title || "Ռեպո/Հակադարձ Ռեպո գործարքներ"}
        </h1>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {data?.description || "Նկարագրություն..."}
        </p>
      </div>

      <div className="w-full lg:w-auto flex justify-center">
        <div className="w-72 h-72 sm:w-80 sm:h-80 bg-[#EFE6F7] rounded-3xl flex items-center justify-center overflow-hidden">
          {data?.imageUrl ? (
            <img 
              src={data.imageUrl} 
              alt="Repo Hero" 
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400 font-medium">Նկար</span>
          )}
        </div>
      </div>
    </div>
  );
}