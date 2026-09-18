import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function ImportantAccordion() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [accordionItems, setAccordionItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccordionData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'importantInfo'));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAccordionItems(items);
      } catch (error) {
        console.error("Տվյալների բեռնման սխալ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccordionData();
  }, []);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  if (loading) {
    return <p className="text-gray-500 py-4">Բեռնվում է...</p>;
  }

  return (
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
      </h2>

      <div className="space-y-3">
        {accordionItems.map((item, index) => (
          <div 
            key={item.id} 
            className="border border-purple-200 rounded-lg overflow-hidden bg-white shadow-sm"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-4 text-left font-medium text-gray-800 hover:bg-purple-50/50 cursor-pointer"
            >
              <span className="flex items-center gap-3">
                <span className="text-purple-600 font-bold">&gt;</span> 
                {item.title}
              </span>
              <span className={`transform transition-transform ${openAccordion === index ? 'rotate-90' : ''}`}>
                ▶
              </span>
            </button>

            {openAccordion === index && (
              <div className="p-4 bg-purple-50/30 border-t border-purple-100 text-sm text-gray-600">
                {item.content || "Մանրամասն տեղեկատվությունը տեղադրված է այստեղ։"}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}