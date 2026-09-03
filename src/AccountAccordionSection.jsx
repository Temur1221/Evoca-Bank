import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function AccountAccordionSection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchAccordionItems = async () => {
      try {
        // Վերցնում ենք accounts հավաքածուի բոլոր փաստաթղթերը
        const querySnapshot = await getDocs(collection(db, 'accounts'));
        const fetchedItems = [];
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // Եթե փաստաթուղթը ունի title և content դաշտեր, ավելացնում ենք ցանկին
          if (data.title && data.content) {
            fetchedItems.push({ id: doc.id, ...data });
          }
        });

        if (fetchedItems.length > 0) {
          setItems(fetchedItems);
        }
      } catch (error) {
        console.error("Սխալ տվյալները ստանիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccordionItems();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return <div className="text-center py-4 text-gray-500">Բեռնվում է...</div>;
  }

  return (
    <section className="mb-12 max-w-7xl mx-auto px-4 space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-wide">
        ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
      </h2>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={item.id || index} className="bg-white border border-purple-200 rounded-2xl overflow-hidden shadow-sm transition-all">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-4 text-left flex items-center space-x-4 font-medium text-gray-800 hover:bg-purple-50/50 focus:outline-none"
            >
              <svg
                className={`w-5 h-5 text-purple-700 transform transition-transform duration-200 shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
              <span className="text-sm md:text-base">{item.title}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 pl-15 text-sm md:text-base text-gray-600 border-t border-purple-100 pt-3 leading-relaxed">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}