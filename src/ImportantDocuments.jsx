import React from 'react';

export default function ImportantDocuments() {
  const documents = [
    {
      id: 1,
      title: "Տեղեկատվական ամփոփագիր (Ավանդներ) 09.06.2026",
      fileUrl: "https://www.evoca.am/files/global_files/1/summary-deposits-09-06-2026.pdf" // Այստեղ կարող եք դնել ֆայլի իրական հղումը կամ պահպանման ուղին
    },
    {
      id: 2,
      title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025",
      fileUrl: "https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf"
    },
    {
      id: 3,
      title: "Դեբետային և կրեդիտային քարտեր (Տեղեկատվական ամփոփագիր) 17.03.2026",
      fileUrl: "https://www.evoca.am/files/global_files/1/credit-and-debit-cards-17-03-26.pdf"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Փաստաթղթեր
      </h2>

      <div className="space-y-3">
        {documents.map((doc) => (
          <a
            key={doc.id}
            href={doc.fileUrl}
            className="flex items-center gap-4 p-4 bg-purple-50/40 hover:bg-purple-50 border border-purple-100 rounded-xl transition-all shadow-sm group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-purple-600 flex-shrink-0">
              {/* Փաստաթղթի և ներբեռնման պատկերակ */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75v6m0 0l-3-3m3 3l3-3" />
              </svg>
            </div>
            <span className="text-gray-800 font-medium text-sm md:text-base group-hover:text-purple-700 transition-colors">
              {doc.title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}