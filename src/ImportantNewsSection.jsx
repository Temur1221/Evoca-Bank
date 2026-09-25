import React from 'react';

export default function ImportantNewsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* 1. Վերնագիր՝ «Կարևոր» */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          Կարևոր
        </h2>
      </div>

      {/* 2. Հիմնական (վերևի) մեծ բլոկ՝ ձախում նկարը, աջում՝ տեքստը */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white mb-12">
        
        {/* Ձախ կողմ՝ Նկար / Գովազդային պաստառ */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-900 aspect-[16/10] flex items-center justify-center">
            {/* Այստեղ կարող եք տեղադրել նկարի աղբյուրը (src) */}
              <img src="https://www.evoca.am/images-cache/news/1/17852444643548/780x585.png" alt="" />
         </div>
          {/* Կանաչ անկյունային դեկորատիվ շրջանակ */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-purple-600 pointer-events-none"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-600 pointer-events-none"></div>
        </div>

        {/* Աջ կողմ՝ Տեքստային մաս */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-2.5 h-2.5 bg-purple-600 rounded-sm inline-block"></span>
              <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">Բանկային</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-3">
              Գործարքների արգելափակում 1 կոճակով
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Հուլիսի 1-ից EvocaTOUCH հավելվածում ու EvocaONLINE համակարգում հասանելի է լինելու նոր՝ «Գործարքների արգելափակում» ֆունկցիոնալը։
            </p>
          </div>
          <div className="text-xs font-medium text-gray-400">
            01.06.2026
          </div>
        </div>

      </div>

      {/* 3. Ստորին մասի 3 փոքր քարտերը */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
        
        {/* Քարտ 1 */}
        <div className="flex flex-col justify-between bg-white rounded-2xl overflow-hidden">
          <div>
            <div className="rounded-xl overflow-hidden mb-3 bg-gray-100 aspect-[16/10] flex items-center justify-center">
                <img src="https://www.evoca.am/images-cache/news/1/17812556342544/438x328.png" alt="" />
            </div>
            <span className="text-[10px] font-bold text-purple-700 uppercase">Կենսակերպ</span>
            <h4 className="text-sm font-bold text-gray-900 mt-1 mb-2 line-clamp-2">
              Evocabank-ը նոր գույներ է տալիս մեր քաղաքին
            </h4>
          </div>
          <span className="text-[10px] text-gray-400">12.06.2026</span>
        </div>

        {/* Քարտ 2 */}
        <div className="flex flex-col justify-between bg-white rounded-2xl overflow-hidden">
          <div>
            <div className="rounded-xl overflow-hidden mb-3 bg-gray-100 aspect-[16/10] flex items-center justify-center">
                <img src="https://www.evoca.am/images-cache/news/1/17757342882486/438x328.png" alt="" />
            </div>
            <span className="text-[10px] font-bold text-purple-700 uppercase">Բանկային</span>
            <h4 className="text-sm font-bold text-gray-900 mt-1 mb-2 line-clamp-2">
              ESG կառավարման համակարգը Evocabank-ում
            </h4>
          </div>
          <span className="text-[10px] text-gray-400">19.05.2026</span>
        </div>

        {/* Քարտ 3 */}
        <div className="flex flex-col justify-between bg-white rounded-2xl overflow-hidden">
          <div>
            <div className="rounded-xl overflow-hidden mb-3 bg-gray-100 aspect-[16/10] flex items-center justify-center">
                <img src="https://www.evoca.am/images-cache/news/1/17707319421286/438x328.png" alt="" />
            </div>
            <span className="text-[10px] font-bold text-purple-700 uppercase">Բանկային</span>
            <h4 className="text-sm font-bold text-gray-900 mt-1 mb-2 line-clamp-2">
              Evocabank-ը միացել է AmCham Armenia-ին
            </h4>
          </div>
          <span className="text-[10px] text-gray-400">10.02.2026</span>
        </div>

      </div>

    </div>
  );
}