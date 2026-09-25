import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function FAQList() {
  const [headerData, setHeaderData] = useState({
    title: 'Հարցերի ցանկ',
    subtitle: 'Բացահայտիր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ։ Աշխատակիցները ուրախ են, մոտիվացված, իսկ առավելությունների մեծ փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների մասին:'
  });
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headerSnapshot = await getDocs(collection(db, 'faqHeader'));
        if (!headerSnapshot.empty) {
          const data = headerSnapshot.docs[0].data();
          setHeaderData({
            title: data.title || headerData.title,
            subtitle: data.subtitle || headerData.subtitle
          });
        }
        
        const faqsSnapshot = await getDocs(collection(db, 'faqItems'));
        const faqsList = faqsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        if (faqsList.length > 0) {
          setFaqs(faqsList);
        }
      } catch (error) {
        console.error("Սխալ տվյալներ ստանիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            {headerData.title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            {headerData.subtitle}
          </p>
        </div>
        <div className="space-y-4">
          {loading ? (
            <p className="text-center text-gray-500 py-8">Բեռնվում է...</p>
          ) : (
            faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id || index}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-purple-600 shadow-md bg-white' 
                      : 'border-purple-200 hover:border-purple-400 bg-white'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`text-lg sm:text-xl font-bold ${isOpen ? 'text-purple-900' : 'text-gray-900'}`}>
                      {faq.question}
                    </span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 text-purple-700' : 'text-purple-600'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-600 text-base leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}