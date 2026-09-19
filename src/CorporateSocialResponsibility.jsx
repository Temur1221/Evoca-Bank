import React from 'react';

export default function CorporateSocialResponsibility() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Կորպորատիվ սոցիալական պատասխանատվություն
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-10 max-w-4xl">
          Բանկը շարունակաբար աջակցություն է ցուցաբերում հանրության տարբեր խմբերին և հասարակական նախաձեռնություններին հետևյալ ոլորտներում՝
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4 bg-[#F5F5F7] p-6 rounded-2xl">
            <div className="w-6 h-1 bg-[#6200EE] mt-2.5 flex-shrink-0"></div>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
              Նորագույն տեխնոլոգիաների զարգացում, նորարար նախաձեռնություններ, startup-ներ
            </p>
          </div>

          <div className="flex items-start space-x-4 bg-[#F5F5F7] p-6 rounded-2xl">
            <div className="w-6 h-1 bg-[#6200EE] mt-2.5 flex-shrink-0"></div>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
              Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ
            </p>
          </div>

          <div className="flex items-start space-x-4 bg-[#F5F5F7] p-6 rounded-2xl">
            <div className="w-6 h-1 bg-[#6200EE] mt-2.5 flex-shrink-0"></div>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
              Հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններ
            </p>
          </div>

          <div className="flex items-start space-x-4 bg-[#F5F5F7] p-6 rounded-2xl">
            <div className="w-6 h-1 bg-[#6200EE] mt-2.5 flex-shrink-0"></div>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
              Հասարակության առավել խոցելի խմբեր, մասնավորապես՝ ծնողազուրկ կամ հատուկ խնամքի տակ գտնվող երեխաներ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}