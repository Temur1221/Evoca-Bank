import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function NecessaryInfoSection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null); // Բացված տողի ինդեքսը

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const q = query(collection(db, 'necessaryInfo'), orderBy('order', 'asc'));
        const querySnapshot = await getDocs(q);
        
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setItems(data);
      } catch (error) {
        console.error('Սխալ տվյալներ ստանալիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInfo();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return <div className="text-center py-6 text-gray-500">Բեռնվում է...</div>;
  }

  return (
    <div className="w-full space-y-4 mt-10">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-wider">
        ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div 
              key={item.id}
              className="border border-purple-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  {item.title}
                </span>
                <svg 
                  className={`w-5 h-5 text-[#6200EE] transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-0 text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line border-t border-gray-50">
                  <div className="pt-3">
                    {item.content}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}