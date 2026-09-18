import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function BusinessDepositsAccordion() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, 'depositsAccordion'));
        const accordionData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(accordionData);
      } catch (error) {
        console.error('Սխալ տվյալներ ստանալիս:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return <div className="py-4 text-center text-gray-400 text-sm">Բեռնվում է...</div>;
  }
  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-6">
      <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight uppercase">
        Անհրաժեշտ տեղեկատվություն
      </h2>

      <div className="space-y-4">
        {displayItems.map((item, index) => (
          <div 
            key={item.id || index} 
            className="border border-purple-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-800 hover:text-[#6200EE] focus:outline-none"
            >
              <span>{item.title}</span>
              <span className={`transform transition-transform duration-300 text-[#6200EE] font-bold text-lg ${openIndex === index ? 'rotate-180' : ''}`}>
                ⌄
              </span>
            </button>

            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-600 text-sm sm:text-base border-t border-purple-50 pt-4 leading-relaxed">
                {item.content || "Մանրամասն տեղեկատվություն ներկայացված չէ:"}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}