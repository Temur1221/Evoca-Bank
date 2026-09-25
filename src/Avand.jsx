import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Համոզվեք, որ այս ուղին ճիշտ է

export default function Avand() {
  const [depositsList, setDepositsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeposits = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "deposits"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDepositsList(items);
      } catch (error) {
        console.error("Սխալ տվյալների բեռնման ժամանակ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeposits();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 py-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
          Ավանդներ
        </h1>

        {loading ? (
          <div className="text-center py-12 text-gray-500 font-medium">
            Բեռնվում է...
          </div>
        ) : depositsList.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            Ավանդներ առայժմ չկան։
          </div>
        ) : (
          <div className="space-y-8">
            {depositsList.map((item) => (
              <div
                key={item.id}
                className="bg-white border-b border-gray-100 pb-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
              >
                <div className="w-full lg:w-[320px] h-[190px] rounded-2xl overflow-hidden shrink-0 shadow-sm bg-gray-50">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

=                <div className="flex-1 space-y-3">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-8 pt-2">
                    {item.amount && (
                      <div className="flex flex-col">
                        <span className="text-[10px] md:text-xs text-gray-400 font-medium uppercase">Սկսած</span>
                        <span className="text-lg md:text-xl font-bold text-[#6200EE]">{item.amount}</span>
                        <span className="text-[10px] md:text-xs text-gray-400">Գումար</span>
                      </div>
                    )}
                    {item.term && (
                      <div className="flex flex-col">
                        <span className="text-[10px] md:text-xs text-gray-400 font-medium uppercase">Մինչև</span>
                        <span className="text-lg md:text-xl font-bold text-[#6200EE]">{item.term}</span>
                        <span className="text-[10px] md:text-xs text-gray-400">Ժամկետ</span>
                      </div>
                    )}
                    {item.rate && (
                      <div className="flex flex-col">
                        <span className="text-[10px] md:text-xs text-gray-400 font-medium uppercase">Մինչև</span>
                        <span className="text-lg md:text-xl font-bold text-[#6200EE]">{item.rate}</span>
                        <span className="text-[10px] md:text-xs text-gray-400">Տոկոսադրույք</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full lg:w-auto flex justify-end">
                  <a
                    href={item.detailsUrl || "#"}
                    className="inline-flex items-center justify-center bg-purple-50 hover:bg-purple-100 text-[#6200EE] font-bold px-6 py-2.5 rounded-full text-sm transition-colors no-underline"
                  >
                    Մանրամասն
                    <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}