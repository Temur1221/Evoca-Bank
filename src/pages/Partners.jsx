import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Header from '../Header';
import Footer from '../Footer';
import FloatingChatWidget from '../FloatingChatWidget'

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'partners'));
        const partnersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPartners(partnersData);
      } catch (error) {
        console.error("Տվյալների բեռնման սխալ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPartners = partners.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(partners.length / itemsPerPage);

  return (
    <>
    <Header/>
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans">
      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
        Գործընկերներ
      </h1>

      {loading ? (
          <p className="text-center text-gray-500 py-20">Բեռնվում է...</p>
        ) : partners.length === 0 ? (
            <p className="text-center text-gray-500 py-20">Գործընկերներ չեն գտնվել:</p>
        ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border border-purple-200 bg-white">
            {currentPartners.map((partner) => (
              <div
              key={partner.id}
              className="h-44 sm:h-52 border border-purple-200 flex items-center justify-center p-6 transition-transform hover:scale-[1.02] bg-white"
              >
                <img
                  src={partner.logoUrl}
                  alt="Partner Logo"
                  className="max-h-20 max-w-[160px] object-contain"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-start gap-4 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="text-gray-400 hover:text-purple-600 disabled:opacity-30 cursor-pointer text-lg font-bold"
            >
              &larr;
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => {
                  const pageNumber = index + 1;
                  return (
                      <button
                      key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm transition-colors cursor-pointer ${
                      currentPage === pageNumber
                        ? 'bg-purple-700 text-white'
                        : 'text-gray-700 hover:bg-purple-100'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="text-purple-700 hover:text-purple-900 disabled:opacity-30 cursor-pointer text-lg font-bold"
            >
              &rarr;
            </button>
          </div>
        </>
      )}
    </div>
    <FloatingChatWidget/>
    <Footer/>
    </>
  );
};

export default Partners;