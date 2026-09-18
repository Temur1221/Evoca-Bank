import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default function NonResidentDocuments() {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025",
      fileUrl: "https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf"
    }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "nonResidentDocuments"));
        if (!querySnapshot.empty) {
          const fetchedDocs = querySnapshot.docs.map((docSnap) => {
            const data = docSnap.doc.data ? docSnap.data() : docSnap.data();
            return {
              id: data.id || docSnap.id,
              title: data.title || "Փաստաթուղթ",
              fileUrl: data.fileUrl || "#"
            };
          });
          setDocuments(fetchedDocs);
        }
      } catch (error) {
        console.error("Error fetching documents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-6">
      <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-6 uppercase tracking-wider">
        ՓԱՍՏԱԹՂԹԵՐ
      </h2>

      <div className="space-y-3">
        {documents.map((doc) => (
          <a
            key={doc.id}
            href={doc.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-purple-400 transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mr-4 group-hover:bg-purple-100 transition-colors">
              {/* Փաստաթղթի տիպիիկ պատկերակ (icon) */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-gray-800 font-medium text-sm md:text-base group-hover:text-purple-700 transition-colors">
              {doc.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}