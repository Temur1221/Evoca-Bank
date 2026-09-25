import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function HowToApplyList() {
  const [headerData, setHeaderData] = useState({
    title: 'Աշխատանքի ընդունվելու փուլեր'
  });
  const [steps, setSteps] = useState([]);
  const [openIndex, setOpenIndex] = useState(0); // Առաջին քայլը բացված է լռելյայն
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Բեռնում ենք վերնագիրը (եթե առկա է հավաքածուում)
        const headerSnapshot = await getDocs(collection(db, 'howToApplyHeader'));
        if (!headerSnapshot.empty) {
          const data = headerSnapshot.docs[0].data();
          setHeaderData({
            title: data.title || headerData.title
          });
        }

        // Բեռնում ենք քայլերը howToApplySteps հավաքածուից
        const stepsSnapshot = await getDocs(collection(db, 'howToApplySteps'));
        let stepsList = stepsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Դասավորում ենք ըստ հերթականության (order կամ stepNumber)
        stepsList.sort((a, b) => (a.order || a.stepNumber || 0) - (b.order || b.stepNumber || 0));

        if (stepsList.length > 0) {
          setSteps(stepsList);
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
        
        {/* Սա բաժնի վերնագիրն է */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            {headerData.title}
          </h2>
        </div>

        {/* Քայլերի ցանկ */}
        <div className="space-y-6 relative">
          {loading ? (
            <p className="text-center text-gray-500 py-8">Բեռնվում է...</p>
          ) : (
            steps.map((step, index) => {
              const isOpen = openIndex === index;
              const isLast = index === steps.length - 1;

              return (
                <div key={step.id || index} className="relative">
                  
                  {/* Ակորդեոն քարտ */}
                  <div
                    className={`border rounded-2xl transition-all duration-300 overflow-hidden relative z-10 bg-white ${
                      isOpen 
                        ? 'border-purple-600 shadow-md' 
                        : 'border-purple-200 hover:border-purple-400'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                    >
                      <div className="flex items-center space-x-4">
                        {/* Մանուշակագույն շրջան համարով */}
                        <div className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">
                          {step.stepNumber || index + 1}
                        </div>
                        {/* Քայլի վերնագիր */}
                        <span className={`text-base sm:text-xl font-bold ${isOpen ? 'text-purple-900' : 'text-gray-900'}`}>
                          {step.title}
                        </span>
                      </div>

                      {/* Սլաքի պատկերակ */}
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 text-purple-700' : 'text-purple-600'}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>

                    {/* Բացվող նկարագրություն */}
                    {isOpen && (
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-600 text-base leading-relaxed border-t border-gray-100 pt-4">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Կետեր քարտերի միջև (եթե վերջինը չէ) */}
                  {!isLast && (
                    <div className="flex flex-col items-center my-2 h-8 justify-center">
                      <div className="w-1 h-1 bg-purple-400 rounded-full my-0.5"></div>
                      <div className="w-1 h-1 bg-purple-400 rounded-full my-0.5"></div>
                      <div className="w-1 h-1 bg-purple-400 rounded-full my-0.5"></div>
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