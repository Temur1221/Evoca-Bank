import React, { useState, useEffect } from 'react';
import { db } from './firebase'; // Ներմուծիր քո firebase-ի կարգավորումները
import { doc, getDoc } from 'firebase/firestore';

export default function FatcaNoticeSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [fatcaData, setFatcaData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFatcaData() {
      try {
        // Այստեղ ուղղեցինք հավաքածուի ('settings') և փաստաթղթի ID-ն ('nb6CsgJ4aJVaiuCTZgY7')
        const docRef = doc(db, 'settings', 'nb6CsgJ4aJVaiuCTZgY7');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setFatcaData(docSnap.data());
        } else {
          console.log('Տվյալներ չեն գտնվել Firebase-ում!');
        }
      } catch (error) {
        console.error('Սխալ տվյալներ ստանալիս:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchFatcaData();
  }, []);

  // Եթե տվյալները դեռ բեռնվում են
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4 text-center text-gray-500">
        Բեռնվում է...
      </div>
    );
  }

  // Եթե տվյալներ չկան, կարող ենք ցույց տալ դատարկ կամ հիմնական բլոկը
  if (!fatcaData) return null;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-6 text-gray-800">
      
      {/* Գլխավոր վերնագիր */}
      <h2 className="text-2xl font-extrabold text-gray-900 tracking-wide uppercase">
        {fatcaData.sectionHeader || "ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ"}
      </h2>

      {/* Ակորդեոն բլոկ */}
      <div className="bg-white border border-purple-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-200">
        
        {/* Սեղմվող վերնագիր */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none hover:bg-purple-50/50 transition-colors"
        >
          <span className="text-sm md:text-base font-bold text-gray-900">
            {fatcaData.title}
          </span>
          
          <span className={`transform transition-transform duration-300 text-[#6200EE] font-bold text-xl ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            ⌄
          </span>
        </button>

        {/* Բացվող բովանդակություն */}
        {isOpen && (
          <div className="px-5 pb-6 md:px-6 pt-2 text-sm text-gray-700 leading-relaxed border-t border-purple-50 space-y-4">
            <p className="font-semibold">{fatcaData.greeting}</p>
            
            <p>{fatcaData.description}</p>

            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-[#6200EE] font-bold">•</span>
                <a 
                  href={fatcaData.legalDocUrl || "#"} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6200EE] underline hover:text-purple-800 font-medium"
                >
                  {fatcaData.legalDocText}
                </a>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-[#6200EE] font-bold">•</span>
                <a 
                  href={fatcaData.individualDocUrl || "#"} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6200EE] underline hover:text-purple-800 font-medium"
                >
                  {fatcaData.individualDocText}
                </a>
              </li>
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}