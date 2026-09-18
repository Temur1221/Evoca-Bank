import React from "react";

export default function MoneyTransfersDocuments() {
  // Փաստաթղթերի տվյալները անմիջապես կոդի մեջ
  const documents = [
    {
      title: "Միջազգային վճարման հանձնարարականներով փոխանցումների իրականացման կանոններ",
      fileUrl: "#" // Այստեղ կարող եք տեղադրել ֆայլի իրական հղումը (PDF)
    },
    {
      title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025",
      fileUrl: "#" // Այստեղ կարող եք տեղադրել ֆայլի իրական հղումը (PDF)
    }
  ];

  return (
    <div className="w-full py-10 px-4 md:px-20 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wide">
        ՓԱՍՏԱԹՂԹԵՐ
      </h2>

      <div className="space-y-4">
        {documents.map((item, index) => (
          <a
            key={index}
            href={item.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#f4f4f4] border border-purple-200 rounded-none p-5 flex items-center justify-between transition-all duration-200 shadow-sm hover:border-purple-400 group"
          >
            <div className="flex items-center space-x-4">
              {/* Ֆայլի նշան */}
              <div className="text-purple-700">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-gray-900 font-semibold text-sm md:text-base group-hover:text-purple-800">
                {item.title}
              </span>
            </div>
            {/* Ներբեռնման/Սլաքի նշան */}
            <div className="text-purple-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}