import React, { useState } from 'react';

export default function SpecialOfferSection() {
  // Կառավարում ենք, թե որ ակորդեոնն է բաց (0-րդը՝ Ավտո Գելըրի, 1-ինը՝ Լոջիք Գրուպ)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const logicGroupData = [
    { amd: "5.0%", usd: "0.0%", eur: "0.0%", term: 12 },
    { amd: "8.5%", usd: "5.0%", eur: "4.0%", term: 24 },
    { amd: "10.0%", usd: "6.0%", eur: "5.0%", term: 36 },
    { amd: "10.75%", usd: "7.00%", eur: "6.0%", term: 48 },
    { amd: "11.50%", usd: "7.50%", eur: "7.0%", term: 60 }
  ];

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 space-y-4">
      <h2 className="text-xl font-extrabold text-gray-900 mb-4 tracking-wide uppercase">
        ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
      </h2>

      {/* --- ԱԿՈՐԴԵՈՆ 1: Ավտո Գելըրի ՓԲԸ --- */}
      <div className="bg-white border border-purple-100 rounded-2xl shadow-sm overflow-hidden transition-all">
        <button 
          onClick={() => toggleAccordion(0)}
          className="w-full px-6 py-5 flex items-center justify-between text-left font-bold bg-white cursor-pointer hover:bg-purple-50/50 transition-colors"
        >
          <span className="text-base text-[#6200EE] flex items-center gap-3">
            <span className={`transform transition-transform duration-300 text-xs ${openIndex === 0 ? 'rotate-90' : ''}`}>
              ▼
            </span>
            Ավտո Գելըրի ՓԲԸ
          </span>
        </button>

        {openIndex === 0 && (
          <div className="px-6 pb-8 text-sm text-gray-700 border-t border-gray-100 pt-6 space-y-6 leading-relaxed">
            <p>
              Արտադրողականության խթանման նպատակային ծրագրի շրջանակում <span className="font-semibold text-[#6200EE]">Evocabank</span>-ը և իր գործընկեր <span className="font-semibold">«Ավտո Գելըրի» ՓԲԸ</span>-ն համատեղ ներկայացնում են նոր առաջարկ, ըստ որի կտրամադրվեն լիզինգներ՝
            </p>

            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
                <span>0.1% տարեկան տոկոսադրույքով</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
                <span>մինչև 36 ամիս մարման ժամկետով</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
                <span>5% կանխավճարով</span>
              </li>
            </ul>

            <p className="font-medium text-gray-900">
              Առաջարկը գործում է միայն բեռնատար ավտոմեքենաների համար:
            </p>

            <p className="text-gray-600 italic">
              Շտապիր օգտվել այս բացառիկ առաջարկից և ձեռք բերել ամենահարմար ու մատչելի պայմաններով լիզինգը հենց այսօր:
            </p>
          </div>
        )}
      </div>

      {/* --- ԱԿՈՐԴԵՈՆ 2: Լոջիք Գրուպ ՍՊԸ --- */}
      <div className="bg-white border border-purple-100 rounded-2xl shadow-sm overflow-hidden transition-all">
        <button 
          onClick={() => toggleAccordion(1)}
          className="w-full px-6 py-5 flex items-center justify-between text-left font-bold bg-white cursor-pointer hover:bg-purple-50/50 transition-colors"
        >
          <span className="text-base text-[#6200EE] flex items-center gap-3">
            <span className={`transform transition-transform duration-300 text-xs ${openIndex === 1 ? 'rotate-90' : ''}`}>
              ▼
            </span>
            Լոջիք Գրուպ ՍՊԸ
          </span>
        </button>

        {openIndex === 1 && (
          <div className="px-6 pb-8 text-sm text-gray-700 border-t border-gray-100 pt-6 space-y-6 leading-relaxed">
            <p>
              Արտադրողականության խթանման նպատակային ծրագրից չօգտվող հաճախորդների համար{' '}
              <span className="font-semibold text-[#6200EE]">Evocabank</span>-ը ներկայացնում է նոր առաջարկ, 
              ըստ որի կտրամադրվեն լիզինգներ հետևյալ պայմաններով՝
            </p>

            <div className="overflow-x-auto border border-gray-200 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-xs text-gray-600 uppercase tracking-wider">
                    <th className="py-3 px-4 font-bold">AMD</th>
                    <th className="py-3 px-4 font-bold">USD</th>
                    <th className="py-3 px-4 font-bold">EUR</th>
                    <th className="py-3 px-4 font-bold">Ժամկետ ամիս</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {logicGroupData.map((row, index) => (
                    <tr key={index} className="hover:bg-purple-50/30 transition-colors">
                      <td className="py-3 px-4 text-gray-900 font-medium">{row.amd}</td>
                      <td className="py-3 px-4 text-gray-700">{row.usd}</td>
                      <td className="py-3 px-4 text-gray-700">{row.eur}</td>
                      <td className="py-3 px-4 text-gray-700">{row.term}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}