import React, { useState } from 'react';
import LeasingTable from './LeasingTable';

export default function LeasingContent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      
      {/* --- ԱԿՈՐԴԵՈՆ 1: Evoca Leasing --- */}
      <div className="bg-white border border-purple-100 rounded-2xl shadow-sm overflow-hidden transition-all">
        <button 
          onClick={() => toggleAccordion(0)}
          className="w-full px-6 py-5 flex items-center justify-between text-left font-bold bg-white cursor-pointer hover:bg-purple-50/50 transition-colors"
        >
          <span className="text-base text-[#6200EE]">Evoca Leasing</span>
          <span className={`transform transition-transform duration-300 text-[#6200EE] ${openIndex === 0 ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>

        {openIndex === 0 && (
          <div className="px-6 pb-8 text-sm text-gray-700 border-t border-gray-100 pt-6 space-y-6 leading-relaxed">
            <p>Լիզինգի առարկան կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից՝ առաջնային և երկրորդային շուկաներից: Լիզինգի առարկա կարող են հանդիսանալ՝</p>
            
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
                <span>Արտադրական/արդյունաբերական հաստոցներ/սարքավորումներ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
                <span>Բեռնատար/մարդատար ավտոմեքենաներ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
                <span>Շինարարական տեխնիկա</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
                <span>Արևային կայաններ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
                <span>Բժշկական սարքավորումներ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
                <span>Կոմերցիոն անշարժ գույք</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
                <span>և այլն</span>
              </li>
            </ul>

            <h3 className="font-bold text-gray-900 pt-4">Լիզինգի առավելությունները</h3>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
                <span>Առանց գրավի առկայության պրոդուկտ է։</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
                <span>Առանց նոտարական/կադաստրային ծախսերի։</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
                <span>Հնարավորություն է տալիս իրականացնել ԱԱՀ-ի հաշվանցումներ և ծախսագրումներ։</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
                <span>Լիզինգի առարկայի ձեռքբերում արտերկրից՝ առանց հաճախորդի մասնակցության գնման գործընթացին։</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
                <span>Մասնագիտական գնահատում և խորհրդատվություն լիզինգային նախագծի վերաբերյալ։</span>
              </li>
            </ul>

            {/* Սովորական աղյուսակ */}
            <LeasingTable type="default" />
          </div>
        )}
      </div>

      {/* --- ԱԿՈՐԴԵՈՆ 2: ՀՀ Կառավարության սուբսիդավորվող ծրագիր --- */}
      <div className="bg-white border border-purple-100 rounded-2xl shadow-sm overflow-hidden transition-all">
        <button 
          onClick={() => toggleAccordion(1)}
          className="w-full px-6 py-5 flex items-center justify-between text-left font-bold bg-white cursor-pointer hover:bg-purple-50/50 transition-colors"
        >
          <span className="text-base text-[#6200EE]">
            ՀՀ Կառավարության Տնտեսության Արդիականացման նպատակային ծրագրի ներքո արտադրողականության խթանմանն ուղղված լիզինգ (գործելու է մինչև 31.12.2026թ.)
          </span>
          <span className={`transform transition-transform duration-300 text-[#6200EE] ${openIndex === 1 ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>

        {openIndex === 1 && (
          <div className="px-6 pb-8 text-sm text-gray-700 border-t border-gray-100 pt-6 space-y-6 leading-relaxed">
            <p>Այս ծրագիրը նախատեսված է տնտեսվարողների համար՝ արտադրողականության բարձրացման և արդիականացման նպատակով:</p>

            {/* Սուբսիդավորվող աղյուսակ */}
            <LeasingTable type="subsidized" />
          </div>
        )}
      </div>

    </div>
  );
}