import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';

export default function AnnouncementsContent() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Յուրաքանչյուր էջում 6 հայտարարություն

  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        setLoading(true);
        const q = query(collection(db, "announcements"), orderBy("date", "desc"));
        const querySnapshot = await getDocs(q);
        
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        
        setAnnouncements(items);
      } catch (error) {
        console.error("Error fetching announcements: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAnnouncements();
  }, []);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = announcements.slice(indexOfFirstItem, indexOfLastItem);

  // Ֆիքսված էջերի ցանկ (1-ից 8)
  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8">
      {/* Վերնագիր և ամսաթվեր */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Հայտարարություններ</h1>
        <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl text-sm text-gray-600 shadow-sm self-start md:self-auto">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>06.09.2017 – 20.09.2026</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Ձախ կողմի նկարազարդում */}
        <div className="hidden lg:flex lg:col-span-3 justify-center pt-8">
          <div className="relative bg-purple-50/50 p-6 rounded-3xl border border-purple-100 flex flex-col items-center shadow-sm w-48 h-64 justify-center">
            <div className="absolute top-4 left-4 w-3 h-3 bg-pink-300 transform rotate-12"></div>
            <div className="absolute bottom-6 right-6 w-3 h-3 bg-yellow-300 rounded-full"></div>
            <div className="bg-[#6200EE] rounded-2xl p-4 shadow-md transform -rotate-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Աջ կողմի ցանկը */}
        <div className="col-span-1 lg:col-span-9 space-y-4">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <p className="text-gray-500 text-lg">Բեռնվում է...</p>
            </div>
          ) : currentItems.length === 0 ? (
            <p className="text-gray-500">Տվյալներ չեն գտնվել այս էջում:</p>
          ) : (
            currentItems.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-200 overflow-hidden"
                >
                  <div
                    onClick={() => toggleAccordion(item.id)}
                    className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50/80 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-[#6200EE] bg-purple-50 p-2.5 rounded-xl transition-colors flex-shrink-0">
                        <svg
                          className={`w-5 h-5 transform transition-transform duration-200 ${
                            isOpen ? 'rotate-0 text-[#6200EE]' : '-rotate-90 text-gray-400'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <span className="text-xs text-gray-400 mt-1 block">{item.date}</span>
                      </div>
                    </div>
                  </div>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {item.content || "Բովանդակությունը բացակայում է:"}
                    </div>
                  )}
                </div>
              );
            })
          )}

          {/* Էջերի համարակալում (Pagination) - մշտապես երևացող թվերով */}
          <div className="flex items-center justify-center space-x-2 pt-6">
            {pageNumbers.map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg font-semibold text-sm cursor-pointer transition-colors ${
                  currentPage === num
                    ? 'bg-[#6200EE] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {num}
              </button>
            ))}

            {/* Աջ սլաք (հաջորդ էջ անցնելու համար) */}
            <button
              onClick={() => setCurrentPage((prev) => (prev < 8 ? prev + 1 : prev))}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}