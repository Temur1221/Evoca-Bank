import React from 'react';

export default function ReportsDocuments() {
  // Ֆայլերի ցանկը՝ իրենց անուններով և համապատասխան URL հղումներով
  const documents = [
    { title: '2021 Տարեկան հաշվետվություն', fileUrl: 'https://www.evoca.am/files/global_files/1/16316811943203.pdf' },
    { title: '2020 Տարեկան հաշվետվություն', fileUrl: 'https://www.evoca.am/files/global_files/1/16463095572524.pdf' },
    { title: '2022 Տարեկան հաշվետվություն', fileUrl: 'https://www.evoca.am/files/global_files/1/16826828593213.pdf' },
    { title: '2023 Տարեկան հաշվետվություն', fileUrl: 'https://www.evoca.am/files/global_files/1/2023-Annual-Report.pdf' },
    { title: '2024 Տարեկան հաշվետվություն', fileUrl: 'https://www.evoca.am/files/global_files/1/2024-annual-report.pdf' },
    { title: '2024 Տարեկան հաշվետվություն', fileUrl: 'https://www.evoca.am/files/global_files/1/annual-report-2024.pdf' },
    { title: '2025 տարեկան հաշվետվություն', fileUrl: 'https://www.evoca.am/files/global_files/1/Annual-report-2025.pdf' },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Տարեկան հաշվետվություն</h1>
      
      <h2 className="text-xl font-bold text-gray-900 mb-4">Փաստաթղթեր</h2>
      
      <div className="space-y-3">
        {documents.map((doc, index) => (
          <a 
            key={index}
            href={doc.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-purple-50/40 rounded-xl hover:bg-purple-50 transition-colors border border-purple-100/60 shadow-sm cursor-pointer block"
          >
            <div className="flex items-center space-x-3">
              <div className="text-purple-700 bg-purple-100 p-2 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="font-medium text-gray-800">{doc.title}</span>
            </div>
            
            <span className="text-purple-700 hover:text-purple-900 font-semibold text-sm">
              Ներբեռնել
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}