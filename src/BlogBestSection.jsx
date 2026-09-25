import React from 'react';

export default function BlogBestSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* 1. Վերնագիր՝ «Լավագույն» */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          Լավագույն
        </h2>
      </div>

      {/* 2. Հիմնական (վերևի) մեծ բլոկ՝ ձախում նկարը, աջում՝ տեքստը */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white mb-12">
        
        {/* Ձախ կողմ՝ Նկար / Գովազդային պաստառ */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-900 aspect-[16/10] flex items-center justify-center">
                <img src="https://www.evoca.am/images-cache/blogs/1/1703162335976/780x585.png" alt="" />
          </div>
          {/* Կանաչ/Մանուշակագույն անկյունային դեկորատիվ շրջանակ */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-purple-600 pointer-events-none"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-600 pointer-events-none"></div>
        </div>

        {/* Աջ կողմ՝ Տեքստային մաս */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-2.5 h-2.5 bg-purple-600 rounded-sm inline-block"></span>
              <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">Նորարարություններ</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-3">
              Ամանորի քո Evocainvest-ի երազանքը
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Ամանորի շեմին Evocabank-ը և EvocaINVEST-ը հնարավորություն են տալիս քեզ բացահայտելու ներդրումային նոր հորիզոններ և իրականացնելու ֆինանսական երազանքները։
            </p>
          </div>
          <div className="text-xs font-medium text-gray-400">
            2021
          </div>
        </div>

      </div>

      {/* 3. Միջին մասի 3 փոքր քարտերը */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100 mb-16">
        
        {/* Քարտ 1 */}
        <div className="flex flex-col justify-between bg-white rounded-2xl overflow-hidden">
          <div>
            <div className="rounded-xl overflow-hidden mb-3 bg-gray-900 aspect-[16/10] flex items-center justify-center">
                <img src="https://www.evoca.am/images-cache/blogs/1/16329119822114/438x328.jpg" alt="" />
            </div>
            <span className="text-[10px] font-bold text-purple-700 uppercase">Կենսակերպ</span>
            <h4 className="text-sm font-bold text-gray-900 mt-1 mb-2 line-clamp-2">
              TOP-10 ֆիլմերը՝ 2021-ի Ամանորյա տոներին դիտելու համար
            </h4>
          </div>
          <span className="text-[10px] text-gray-400">2021</span>
        </div>

        {/* Քարտ 2 */}
        <div className="flex flex-col justify-between bg-white rounded-2xl overflow-hidden">
          <div>
            <div className="rounded-xl overflow-hidden mb-3 bg-gray-900 aspect-[16/10] flex items-center justify-center">
                <img src="https://www.evoca.am/images-cache/blogs/1/16329974590876/438x328.png" alt="" />
            </div>
            <span className="text-[10px] font-bold text-purple-700 uppercase">Կենսակերպ</span>
            <h4 className="text-sm font-bold text-gray-900 mt-1 mb-2 line-clamp-2">
              TOP-10 ամանորյա մուլտֆիլմեր 21-րդ դարում
            </h4>
          </div>
          <span className="text-[10px] text-gray-400">2021</span>
        </div>

        {/* Քարտ 3 */}
        <div className="flex flex-col justify-between bg-white rounded-2xl overflow-hidden">
          <div>
            <div className="rounded-xl overflow-hidden mb-3 bg-gray-900 aspect-[16/10] flex items-center justify-center">
                <img src="https://www.evoca.am/images-cache/blogs/1/16335957379/438x328.png" alt="" />
            </div>
            <span className="text-[10px] font-bold text-purple-700 uppercase">Տնտեսվարող</span>
            <h4 className="text-sm font-bold text-gray-900 mt-1 mb-2 line-clamp-2">
              Կառուցե՞լ ապագա տեխնոլոգիաներով
            </h4>
          </div>
          <span className="text-[10px] text-gray-400">2021</span>
        </div>

      </div>

      {/* 4. Վերնագիր՝ «Գլխավոր» */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          Գլխավոր
        </h2>
      </div>

      {/* 5. Ստորին մեծ բլոկ (Գլխավոր) */}
      <div className="relative overflow-hidden shadow-lg bg-gray-900 aspect-[21/9] flex items-end p-6 sm:p-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-950 via-purple-950/80 to-purple-800/40 flex items-center justify-center">
          <img src="https://www.evoca.am/images-cache/blogs/1/16336923273854/1440x650.png" alt="" />
        </div>  

        {/* Ներքին սպիտակ քարտը նկարի վրա */}
        <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-6 max-w-lg shadow-xl">
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-2 h-2 bg-purple-600 rounded-sm inline-block"></span>
            <span className="text-xs font-bold text-purple-700 uppercase">Նորարարություններ</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-2">
            Evoca-գույնի ուղղորդված հրաշագործը
          </h3>
          <p className="text-xs text-gray-600 line-clamp-2 mb-3">
            Բացահայտեք բանկային նորարարական լուծումներն ու գունավորեք ձեր առօրյան Evocabank-ի հետ միասին։
          </p>
          <span className="text-[10px] text-gray-400">01.01.2021</span>
        </div>
      </div>

    </div>
  );
}