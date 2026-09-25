import React from 'react';

export default function BlogSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* 1. Վերնագիր և ֆիլտրեր */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Բլոգ</h1>
        
        {/* Ֆիլտրերի կոճակներ և Արխիվ */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {['Բոլորը', 'Կենսակերպ', 'Տնտեսվարող', 'Նորարարություններ'].map((item, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  item === 'Բոլորը'
                    ? 'bg-purple-100 text-[#6200EE]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button className="hidden sm:flex items-center gap-1 px-4 py-2 bg-purple-50 text-[#6200EE] hover:bg-purple-100 rounded-full text-xs font-semibold transition cursor-pointer">
            Արխիվ
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* 2. Հիմնական և կողային նորությունների գլխավոր բլոկ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Ձախ կողմ՝ Մեծ հոդված (Monthly Recap) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-2.5 h-2.5 bg-purple-600 rounded-sm inline-block"></span>
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">Կենսակերպ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-3">
              Monthly Recap
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Monthly Recap-ն օգնում է ամփոփել ամիսը, հասկանալ ձեռքբերումները, բաց թողածները և փոքր քայլերով կատարել մեծ ու արդյունավետ փոփոխություններ։
            </p>
          </div>
          <div className="text-xs font-medium text-gray-400">
            05.01.2026
          </div>
        </div>

        {/* Աջ կողմ՝ Մեծ նկար/Գովազդային պաստառ (Monthly Recap banner) */}
        <div className="lg:col-span-6 relative">
            <img src="https://www.evoca.am/images-cache/blogs/1/17683779856926/780x585.png" alt="" />
        </div>

      </div>

      {/* 3. Ստորին հատվածի հոդվածների ցանց (Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 pt-8 border-t border-gray-100">
        
        {/* Ձախ մաս՝ Մեծ քարտ (EvocaINVEST. ինչպես կատարել գործարքներ) */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-2xl overflow-hidden">
          <div>
            <div className="rounded-2xl overflow-hidden mb-4 bg-gray-900 aspect-[16/9] flex items-center justify-center relative">
                <img src="https://www.evoca.am/images-cache/blogs/1/17186317173483/616x462.jpg" alt="" />
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 bg-purple-600 rounded-sm inline-block"></span>
              <span className="text-xs font-bold text-purple-700 uppercase">Նորարարություններ</span>
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-2">
              EvocaINVEST. ինչպես կատարել գործարքներ
            </h3>
            <p className="text-xs text-gray-600 line-clamp-2 mb-4">
              Այս բողոքում կներկայացնենք EvocaINVEST-ը, ինչպես նաև գործարքներ կնքելու համար առաջնային անհրաժեշտ գործիքներից օգտվելու քայլերը։
            </p>
          </div>
          <div className="text-xs font-medium text-gray-400">
            17.06.2024
          </div>
        </div>

        {/* Աջ մաս՝ 4 փոքր քարտեր (2x2) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Քարտ 1 */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="rounded-xl overflow-hidden mb-2 bg-gray-900 aspect-[16/9] flex items-center justify-center">
              <img src="https://www.evoca.am/images-cache/blogs/1/17138737784517/450x295.jpg" alt="" />
              </div>
              <span className="text-[10px] font-bold text-purple-700 uppercase">Նորարարություններ</span>
              <h4 className="text-sm font-bold text-gray-900 mt-1 mb-1 line-clamp-2">
                Ներդրումների կարելի՞ն ու չկարելի՞ները
              </h4>
            </div>
            <span className="text-[10px] text-gray-400">25.04.2024</span>
          </div>

          {/* Քարտ 2 */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="rounded-xl overflow-hidden mb-2 bg-gray-900 aspect-[16/9] flex items-center justify-center">
                <img src="https://www.evoca.am/images-cache/blogs/1/17128187874533/450x295.jpg" alt="" />
              </div>
              <span className="text-[10px] font-bold text-purple-700 uppercase">Նորարարություններ</span>
              <h4 className="text-sm font-bold text-gray-900 mt-1 mb-1 line-clamp-2">
                Փոքր քայլերով դեպի մեծ եկամուտներ
              </h4>
            </div>
            <span className="text-[10px] text-gray-400">11.04.2024</span>
          </div>

          {/* Քարտ 3 */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="rounded-xl overflow-hidden mb-2 bg-gray-200 aspect-[16/9]">
                <img src="https://www.evoca.am/images-cache/blogs/1/16691870758279/450x295.jpg" alt="" />
              </div>
              <span className="text-[10px] font-bold text-purple-700 uppercase">Կենսակերպ</span>
              <h4 className="text-sm font-bold text-gray-900 mt-1 mb-1 line-clamp-2">
                Ինչպե՞ս սկսել բիզնես. Guide from A to Z
              </h4>
            </div>
            <span className="text-[10px] text-gray-400">05.01.2024</span>
          </div>

          {/* Քարտ 4 */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="rounded-xl overflow-hidden mb-2 bg-gray-200 aspect-[16/9]">
                <img src="https://www.evoca.am/images-cache/blogs/1/16443271105456/450x295.png" alt="" />
              </div>
              <span className="text-[10px] font-bold text-purple-700 uppercase">Կենսակերպ</span>
              <h4 className="text-sm font-bold text-gray-900 mt-1 mb-1 line-clamp-2">
                Նայիր շուրջդ և տես, թե որքան ավելորդ իրեր կան
              </h4>
            </div>
            <span className="text-[10px] text-gray-400">09.02.2022</span>
          </div>

        </div>

      </div>

    </div>
  );
}