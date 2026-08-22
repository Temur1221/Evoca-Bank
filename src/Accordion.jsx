import React, { useState, useEffect } from 'react';
import { db } from './firebase'; 
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function Accordion() {
  const [accordionData, setAccordionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const q = query(collection(db, 'cardTerms'), orderBy('order', 'asc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAccordionData(data);
      } catch (error) {
        console.error('Սխալ տվյալները բեռնելիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTerms();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return <div className="text-center py-10 text-gray-400">Բեռնվում է...</div>;
  }

  return (
    <div className="w-full font-sans">
      <h2 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wider">
        Անհրաժեշտ տեղեկատվություն
      </h2>

      <div className="space-y-3">
        {accordionData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={item.id} 
              className="border border-[#E9D5FF] rounded-xl overflow-hidden transition-all bg-white shadow-xs hover:border-[#C084FC]"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-4 text-left font-medium text-gray-800 bg-[#FAF5FF] hover:bg-[#F3E8FF] transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-3">
                  <span className={`transform transition-transform text-[#7C3AED] ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                  {item.title}
                </span>
              </button>

              {isOpen && (
                <div className="p-5 text-sm text-gray-700 bg-white border-t border-purple-100 leading-relaxed">
                  {/* Եթե տեքստը պարունակում է թվերով կետեր, այն գեղեցիկ կդասավորվի */}
                  <div className="space-y-3">
                    {item.content.split('\n').map((paragraph, pIdx) => {
                      if (!paragraph.trim()) return null;
                      
                      // Ստուգում ենք, թե արդյոք կետը սկսվում է թվով (օր. "1.", "2." և այլն)
                      const isNumbered = /^\d+\./.test(paragraph.trim());

                      if (isNumbered) {
                        const parts = paragraph.trim().split('.');
                        const num = parts[0];
                        const text = parts.slice(1).join('.').trim();

                        return (
                          <div key={pIdx} className="flex items-start gap-3">
                            <span className="font-bold text-[#7C3AED] min-w-[20px]">{num}.</span>
                            <p className="flex-1">{text}</p>
                          </div>
                        );
                      }

                      return <p key={pIdx}>{paragraph}</p>;
                    })}
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