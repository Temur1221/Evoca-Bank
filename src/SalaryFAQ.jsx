import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function SalaryFAQ() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        // Վերցնում ենք հարցերը բազայից՝ դասավորված ըստ order դաշտի
        const q = query(collection(db, 'evocasalaryFaq'), orderBy('order', 'asc'));
        const querySnapshot = await getDocs(q);
        
        const faqList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setFaqs(faqList);
      } catch (error) {
        console.error('Սխալ FAQ բեռնման ժամանակ:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Բեռնվում է...</div>;
  }

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-8 max-w-5xl mx-auto text-gray-800 space-y-8">
      {/* Վերնագիր */}
      <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-8">
        Հաճախ տրվող հարցեր
      </h2>

      {/* Հարցերի ցանկ */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={faq.id} 
            className="border border-purple-200 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm hover:border-[#6200EE]"
          >
            {/* Հարցի կոճակ */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full py-4 px-6 text-left flex justify-between items-center bg-white focus:outline-none"
            >
              <span className="font-medium text-gray-800 text-sm sm:text-base">
                {faq.question}
              </span>
              <span className={`transform transition-transform duration-200 text-[#6200EE] font-bold ${openIndex === index ? 'rotate-180' : ''}`}>
                ⌄
              </span>
            </button>

            {/* Պատասխան (բացվող հատված) */}
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 text-sm sm:text-base border-t border-gray-100 pt-3 bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}