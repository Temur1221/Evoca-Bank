import React from 'react';

export default function EvocaTouchDocs() {
  const documents = [
    {
      title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025",
      fileUrl: "https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf" // Այստեղ կարող ես տեղադրել իրական PDF ֆայլի հղումը
    },
    {
      title: "SWIFT Transfers (20.05.2026)",
      fileUrl: "https://www.evoca.am/files/global_files/1/evocatouch-eng.pdf"
    },
    {
      title: "SWIFT переводы в РФ (20.05.2026)",
      fileUrl: "https://www.evoca.am/files/global_files/1/evocatouch-rus.pdf"
    }
  ];

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-8 max-w-5xl mx-auto text-gray-800 space-y-6">
      {/* Վերնագիր */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
        Փաստաթղթեր
      </h2>

      {/* Փաստաթղթերի ցանկ */}
      <div className="space-y-3">
        {documents.map((doc, index) => (
          <a
            key={index}
            href={doc.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-purple-50/50 border border-purple-100 rounded-2xl hover:border-[#6200EE] hover:bg-purple-50 transition shadow-sm group"
          >
            <div className="flex items-center space-x-3">
              {/* Փաստաթղթիիկոնա */}
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-[#6200EE] shadow-sm group-hover:scale-105 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-[#6200EE] transition">
                {doc.title}
              </span>
            </div>

            {/* Ներբեռնման կամ սլաքի նշան */}
            <span className="text-[#6200EE] font-bold text-sm px-3 py-1 bg-white rounded-lg shadow-sm">
              PDF
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}   