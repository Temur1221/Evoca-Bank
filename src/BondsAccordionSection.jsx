import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function BondsAccordionSection() {
  const [accordionItems, setAccordionItems] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccordion = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'bondsAccordion'));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAccordionItems(items);
      } catch (error) {
        console.error('Սխալ ակորդեոնի տվյալները բեռնելիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccordion();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-wide uppercase mb-8">
          ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
        </h2>

        {loading ? (
          <div className="text-center py-10 text-gray-400">Բեռնվում է...</div>
        ) : (
          <div className="space-y-4">
            {accordionItems.map((item, index) => (
              <div
                key={item.id || index}
                className="border border-[#E1D2FD] rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-[#F9F6FC] transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">
                    {item.title}
                  </span>
                  <span className={`text-[#6200EE] transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-5 sm:px-8 pb-8 pt-4 border-t border-[#F3EEFA] bg-white">
                    
                    {item.hasTable ? (
                      <div className="space-y-6">
                        <h3 className="text-center font-bold text-[#6200EE] text-base sm:text-lg tracking-wider my-4">
                          {item.tableTitle || 'ԹՈՂԱՐԿՎԱԾ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ'}
                        </h3>

                        <div className="overflow-x-auto border border-[#E1D2FD] rounded-xl">
                          <table className="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead>
                              <tr className="bg-[#F9F6FC] border-b border-[#E1D2FD]">
                                <th className="p-3 font-semibold text-gray-700 w-1/3 border-r border-[#E1D2FD]">Դաս</th>
                                <th className="p-3 font-semibold text-gray-700 text-center border-r border-[#E1D2FD]">Անվանական արժեկտրոնային</th>
                                <th className="p-3 font-semibold text-gray-700 text-center"></th>
                              </tr>
                            </thead>
                            <tbody>
                              {item.rows && Object.values(item.rows).map((row, rIndex) => (
                                <tr key={rIndex} className="border-b border-[#F3EEFA] hover:bg-[#FAF7FC]">
                                  <td className="p-3 font-medium text-gray-800 border-r border-[#E1D2FD]">{row.label}</td>
                                  <td className="p-3 text-center text-gray-600 border-r border-[#E1D2FD]">{row.val1}</td>
                                  <td className="p-3 text-center text-gray-600">{row.val2}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {item.note && (
                          <p className="text-xs sm:text-sm text-gray-600 pt-2">
                            {item.note}
                          </p>
                        )}

                        {/* Փաստաթղթերի ներբեռնման կոճակներ */}
                        {item.documents && (
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                            {Object.values(item.documents).map((doc, dIndex) => (
                              <a
                                key={dIndex}
                                href={doc.url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-[#E1D2FD] rounded-2xl p-4 flex flex-col items-center text-center hover:bg-[#F9F6FC] transition-colors group"
                              >
                                <span className="text-[#6200EE] font-bold text-xs sm:text-sm mb-2 group-hover:underline">
                                  {doc.name}
                                </span>
                                <div className="w-10 h-14 border-2 border-gray-400 rounded-lg bg-white mt-1 flex items-center justify-center">
                                  <span className="text-[10px] text-gray-500 font-bold">PDF</span>
                                </div>
                              </a>
                            ))}
                          </div>
                        )}

                      </div>
                    ) : (
                      <div className="text-gray-600 text-sm sm:text-base">
                        {item.content}
                      </div>
                    )}

                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}