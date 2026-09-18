import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default function MoneyTransfersAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const [accordions, setAccordions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccordions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "moneyTransfersAccordion"));
        if (!querySnapshot.empty) {
          const items = querySnapshot.docs.map(doc => doc.data());
          setAccordions(items);
        } else {
          setAccordions([]);
        }
      } catch (error) {
        console.error("Error fetching accordion data from Firebase:", error);
        setAccordions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAccordions();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return <div className="w-full py-10 text-center text-gray-500">Բեռնվում է...</div>;
  }

  return (
    <div className="w-full py-10 px-4 md:px-20 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wide">
        ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
      </h2>

      <div className="space-y-4">
        {accordions.length > 0 ? (
          accordions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="w-full border border-purple-200 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm hover:border-purple-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-gray-900 font-bold text-base md:text-lg">
                    {item.title}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-purple-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-gray-600 text-sm md:text-base border-t border-purple-50 bg-purple-50/30">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-gray-500">Տվյալներ չեն գտնվել Firebase-ի moneyTransfersAccordion հավաքածուում:</p>
        )}
      </div>
    </div>
  );
}