import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function AccountDocuments() {
  const [docData, setDocData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const docRef = doc(db, 'accounts', 'documentsSection');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDocData(docSnap.data());
        }
      } catch (error) {
        console.error("Սխալ փաստաթղթերը ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const defaultFiles = [
    { title: "Բանկային հաշիվների բացման սակագներ և դրույթներ 03.09.2026թ.", link: "https://www.evoca.am/files/global_files/1/bank-account-08-06-26.pdf" },
    { title: "Տեղեկատվական ամփոփագիր Բանկային հաշիվների 06.06.26", link: "https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf" },
    { title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ 18.05.2025", link: "https://www.evoca.am/files/global_files/1/accounts-information-pdf.pdfc" }
  ];

  const files = docData?.files || defaultFiles;

  if (loading) {
    return <div className="text-center py-4 text-gray-500">Բեռնվում է...</div>;
  }

  return (
    <section className="mb-12 max-w-7xl mx-auto px-4 space-y-4">
      <h3 className="text-lg md:text-xl font-bold text-gray-900">
        {docData?.sectionTitle || "Փաստաթղթեր"}
      </h3>
      <div className="space-y-2">
        {files.map((file, index) => (
          <a 
            key={index}
            href={file.link || "#"} 
            className="flex items-center space-x-3 p-4 bg-white border border-purple-200 rounded-2xl hover:border-purple-400 transition-colors shadow-sm"
          >
            <div className="text-purple-700 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-sm md:text-base text-gray-800 font-medium hover:text-purple-700">
              {file.title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}