import React from 'react';

export default function NewsHeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* 1. Վերնագիր և ենթամենյու (Ֆիլտրեր) */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Նորություններ</h1>
        
        {/* Ֆիլտրերի կոճակներ */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {['Գլխավոր', 'Հաճախին', 'Հարցազրույցներ', 'Պրոդուկտներ', 'Նորարարություններ', 'Տնտեսվարող', 'Մրցանակներ', 'CSR', 'Այլ', 'Բոլորը'].map((item, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                item === 'Բոլորը'
                  ? 'bg-purple-100 text-[#6200EE] flex items-center gap-1'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {item}
              {item === 'Բոլորը' && (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Հիմնական և կողային նորությունների գլխավոր բլոկ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Ձախ կողմ՝ Մեծ նորություն (Կենսակերպ) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-2.5 h-2.5 bg-lime-400 rounded-sm inline-block"></span>
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">Կենսակերպ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-3">
              Դիլիջան, մենք գալիս ենք
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Սեպտեմբերի 18-ին Evocabank-ը բացում է իր նոր՝ «Դիլիջան» մասնաճյուղի բացման մեծ բացօթյա համերգով՝ DJ Johny-ի և «Ռեինկարնացիա»-ի մասնակցությամբ։
            </p>
          </div>
          <div className="text-xs font-medium text-gray-400">
            11.09.2026
          </div>
        </div>

        {/* Աջ կողմ՝ Մեծ նկար/Գովազդային պաստառ (Դիլիջան համերգ) */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-900 aspect-[16/10] flex items-center justify-center">
            {/* Այստեղ կարող եք տեղադրել նկարի աղբյուրը (src) */}
              <div className="text-white">
                <img src="https://www.evoca.am/images-cache/news/1/17891134831451/780x585.png" alt="" />
              </div>
          </div>
          {/* Կանաչ անկյունային դեկորատիվ շրջանակ նկարի շուրջ (ինչպես նկարում է) */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-lime-400 pointer-events-none"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-lime-400 pointer-events-none"></div>
        </div>

      </div>

      {/* 3. Ստորին հատվածի նորությունների ցանց (Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 pt-8 border-t border-gray-100">
        
        {/* Ձախ մաս՝ Մեծ քարտ (Evocabank-ը AMX AWARDS...) */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-2xl overflow-hidden">
          <div>
            <div className="rounded-2xl overflow-hidden mb-4 bg-gray-100 aspect-[16/9] flex items-center justify-center">
                <img src="https://www.evoca.am/images-cache/news/1/17815943976247/616x462.png" alt="" />
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-sm inline-block"></span>
              <span className="text-xs font-bold text-gray-800 uppercase">Մրցանակներ</span>
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-2">
              Evocabank-ը՝ AMX AWARDS 2026-ի մրցանակակիր
            </h3>
            <p className="text-xs text-gray-600 line-clamp-2 mb-4">
              Evocabank-ը AMX AWARDS 2026-ի ընթացքում արժանացել է «Վճարհաշվարկային ավտոմատացված համակարգերի կիրառման լավագույն գործընկեր» մրցանակին։
            </p>
          </div>
          <div className="text-xs font-medium text-gray-400">
            16.06.2026
          </div>
        </div>

        {/* Աջ մաս՝ 4 փոքր քարտեր (2x2 կամ սյունակ) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Քարտ 1 */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="rounded-xl overflow-hidden mb-2 bg-gray-100 aspect-[16/9]">                <img src="https://www.evoca.am/images-cache/news/1/17784860353078/450x295.png" alt="" />
</div>
              <span className="text-[10px] font-bold text-purple-700 uppercase">Մրցանակներ</span>
              <h4 className="text-sm font-bold text-gray-900 mt-1 mb-1 line-clamp-2">
                Evocabank. Լավագույն ΦMՁ բանկը Հայաստանում՝ երկրորդ...
              </h4>
            </div>
            <span className="text-[10px] text-gray-400">08.05.2026</span>
          </div>

          {/* Քարտ 2 */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="rounded-xl overflow-hidden mb-2 bg-gray-100 aspect-[16/9]">
                <img src="https://www.evoca.am/images-cache/news/1/17722002491716/450x295.png" alt="" />
              </div>
              <span className="text-[10px] font-bold text-purple-700 uppercase">Պրոդուկտներ</span>
              <h4 className="text-sm font-bold text-gray-900 mt-1 mb-1 line-clamp-2">
                Քո Crypto հաշիվը՝ արդեն EvocaTOUCH-ում
              </h4>
            </div>
            <span className="text-[10px] text-gray-400">27.02.2026</span>
          </div>

          {/* Քարտ 3 */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="rounded-xl overflow-hidden mb-2 bg-gray-100 aspect-[16/9]">
                <img src="https://www.evoca.am/images-cache/news/1/17720089281517/450x295.png" alt="" />
              </div>
              <span className="text-[10px] font-bold text-purple-700 uppercase">Հարցազրույցներ</span>
              <h4 className="text-sm font-bold text-gray-900 mt-1 mb-1 line-clamp-2">
                Կարեն Եղիազարյանի հարցազրույցը Los Angeles Timez...
              </h4>
            </div>
            <span className="text-[10px] text-gray-400">25.02.2026</span>
          </div>

          {/* Քարտ 4 */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="rounded-xl overflow-hidden mb-2 bg-gray-100 aspect-[16/9]">
                <img src="https://www.evoca.am/images-cache/news/1/17683825017248/450x295.jpg" alt="" />
              </div>
              <span className="text-[10px] font-bold text-purple-700 uppercase">Հաճախին</span>
              <h4 className="text-sm font-bold text-gray-900 mt-1 mb-1 line-clamp-2">
                Evocabank-ի «Աջափնյակ» մասնաճյուղն արդեն բաց է։
              </h4>
            </div>
            <span className="text-[10px] text-gray-400">17.01.2026</span>
          </div>

        </div>

      </div>

    </div>
  );
}