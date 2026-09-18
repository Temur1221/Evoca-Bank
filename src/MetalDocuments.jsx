import React from "react";

export default function MetalDocuments() {
  const documents = [
    {
      id: 1,
      title: "Տեղեկատվական ամփոփագիր (Բանկային հաշիվներ) 08.06.26",
      fileUrl: "https://www.evoca.am/files/global_files/1/bank-account-08-06-26.pdf",
    },
    {
      id: 2,
      title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025",
      fileUrl: "https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mt-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
        Փաստաթղթեր
      </h2>
      
      <div className="space-y-4">
        {documents.length > 0 ? (
          documents.map((docItem) => (
            <a
              key={docItem.id}
              href={docItem.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors border border-gray-100 no-underline group"
            >
              <div className="flex items-center space-x-3">
                <div className="text-[#6200EE] p-2 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium text-sm md:text-base">
                  {docItem.title}
                </span>
              </div>
            </a>
          ))
        ) : (
          <p className="text-gray-500 text-sm">Փաստաթղթեր առայժմ չկան</p>
        )}
      </div>
    </div>
  );
}