import React from 'react';

export default function SemiannualContent() {
  const documents = [
    { id: 1, title: 'Կիսամյակային հաշվետվություն (2025 առաջին կիսամյակ)', url: 'https://www.evoca.am/files/menu/1/17567925915914.pdf' },
    { id: 2, title: 'Կիսամյակային հաշվետվություն (2024 առաջին կիսամյակ)', url: 'https://www.evoca.am/files/menu/1/174764918525.pdf' },
    { id: 3, title: 'Կիսամյակային հաշվետվություն (2023 առաջին կիսամյակ)', url: 'https://www.evoca.am/files/menu/1/1747649098332.pdf' },
    { id: 4, title: 'Կիսամյակային հաշվետվություն (2022 առաջին կիսամյակ)', url: 'https://www.evoca.am/files/menu/1/16599609692824.pdf' },
    { id: 5, title: 'Կիսամյակային հաշվետվություն (2021 առաջին կիսամյակ)', url: 'https://www.evoca.am/files/global_files/1/16488915037172.pdf' },
  ];

  return (
    <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Կիսամյակային հաշվետվություն</h1>
      
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Փաստաթղթեր</h2>

      <div className="space-y-3">
        {documents.map((doc) => (
          <a
            key={doc.id}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-100 transition-colors shadow-sm group"
          >
            <div className="mr-4 text-purple-600 bg-purple-50 p-2.5 rounded-lg group-hover:bg-purple-100 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11v6m0 0l-3-3m3 3l3-3" />
              </svg>
            </div>
            <span className="text-gray-800 font-medium group-hover:text-purple-700 transition-colors">
              {doc.title}
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}