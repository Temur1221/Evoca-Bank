import React, { useState, useEffect } from 'react';
import { db } from './firebase'; // Ստուգիր ֆայլի ճանապարհը
import { collection, getDocs } from 'firebase/firestore';

export default function BusinessTradeAccordion() {
  const [openIndex, setOpenIndex] = useState(0); // Սկզբնականում առաջինն է բացված
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAccordionData() {
      try {
        const querySnapshot = await getDocs(collection(db, "tradeAccordions"));
        const firestoreData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setItems(firestoreData);
        if (firestoreData.length > 0) {
          setOpenIndex(0);
        }
      } catch (error) {
        console.error("Սխալ Firestore-ից տվյալներ ստանալիս: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAccordionData();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6 text-gray-800">
      
      <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
        ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
      </h3>

      {loading ? (
        <div className="text-gray-500 text-sm">Բեռնվում է տեղեկատվությունը...</div>
      ) : items.length === 0 ? (
        <div className="text-gray-500 text-sm">Տվյալներ չեն գտնվել Firebase-ում:</div>
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id || index}
                className="bg-white border border-purple-100 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none hover:bg-purple-50/40 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-gray-900">
                    {item.title}
                  </span>
                  <span
                    className={`transform transition-transform duration-200 text-[#6200EE] font-bold text-lg ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6 border-t border-purple-50 pt-4">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}