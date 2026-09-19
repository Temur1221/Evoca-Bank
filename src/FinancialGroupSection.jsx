import React from 'react';

export default function FinancialGroupSection() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12 space-y-6">
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Էվոկա ֆինանսական խումբ
        </h1>

        <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
          <p>
            ՀՀ կենտրոնական բանկի խորհրդի 30.06.2025թ. թիվ 05 ԲԳ Ա որոշմամբ{' '}
            <span className="font-bold text-[#6200EE]">Evocabank</span>-ը («ԷՎՈԿԱԲԱՆԿ» ՓԲԸ) և{' '}
            <span className="font-bold">Willco</span>-ն («Վիլկո» ՍՊԸ) միավորվում են՝ դառնալով մեկ ֆինանսական խումբ՝{' '}
            <span className="font-bold">Evoca</span> անվամբ:
          </p>

          <p>
            <span className="font-bold text-[#6200EE]">Evocabank</span>-ը նշանակվել է{' '}
            <span className="font-semibold">Evoca ֆինանսական խմբի</span> պատասխանատու անձ:
          </p>

          <p>
            <span className="font-bold">Willco</span> կապիտալի կառավարման ընկերության մասին ամբողջական տեղեկատվությունը՝{' '}
            <a 
              href="https://wilco.am/hy/about-us/#owner" 
              className="text-[#6200EE] font-medium underline hover:text-purple-700 transition-colors"
            >
              այստեղ
            </a>:
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl bg-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-100 flex items-center justify-center">
            <img 
              src="https://www.evoca.am/file_manager/Evoca%20financial%20group/%C2%AB%D4%B7%D5%8E%D5%88%D4%BF%D4%B1%C2%BB%20%D6%86%D5%AB%D5%B6%D5%A1%D5%B6%D5%BD%D5%A1%D5%AF%D5%A1%D5%B6%20%D5%AD%D5%B8%D6%82%D5%B4%D5%A2%20Armenian.png" 
              alt="Էվոկա ֆինանսական խմբի կառուցվածք" 
              className="w-full h-auto object-contain rounded-xl shadow-sm"
            />
          </div>
          <span className="text-xs text-gray-400 mt-2">
            (Փոխարինեք նկարի հղումը ձեր սխեման պարունակող նկարով)
          </span>
        </div>

      </div>
    </div>
  );
}