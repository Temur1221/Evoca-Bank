import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function InvestmentAccordion() {
  const [items, setItems] = useState([]);
  const [sectionTitle, setSectionTitle] = useState("ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ");
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, 'investmentAccordion'));
        const allItems = [];
        
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          // Եթե փաստաթուղթն ունի sectionTitle, կարող ենք վերցնել
          if (docData.sectionTitle) {
            setSectionTitle(docData.sectionTitle);
          }
          
          // Եթե յուրաքանչյուր փաստաթուղթ ունի առանձին title և content (կամ items զանգված)
          if (docData.title && docData.content) {
            allItems.push({ title: docData.title, content: docData.content });
          } else if (Array.isArray(docData.items)) {
            allItems.push(...docData.items);
          }
        });

        setItems(allItems);
      } catch (error) {
        console.error("Error fetching accordion data from Firestore:", error);
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
    return <div className="w-full py-10 text-center text-gray-500">Բեռնվում է...</div>;
  }

  return (
    <div className="w-full bg-white py-10 px-4 sm:px-8 lg:px-16 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Վերնագիր */}
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-wide mb-6">
          {sectionTitle}
        </h2>

        {/* Ակորդեոնների ցանկ */}
        <div className="space-y-4">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div 
                key={index} 
                className="border border-[#E1D2FD] rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-[#f8f6fb] transition-colors"
                >
                  <span className="font-bold text-gray-900 text-sm sm:text-base">
                    {item.title}
                  </span>
                  <span className={`transform transition-transform duration-200 text-[#6200EE] font-bold text-lg ${openIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {openIndex === index && (
                  <div className="p-5 bg-[#f8f6fb] border-t border-[#E1D2FD] text-sm sm:text-base text-gray-700 leading-relaxed">
                    {item.content}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-sm text-gray-500">Տվյալներ չեն գտնվել բազայում</div>
          )}
        </div>

      </div>
    </div>
  );
}