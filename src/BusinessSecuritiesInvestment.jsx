import React from 'react';
import { Link } from 'react-router-dom';

export default function BusinessSecuritiesInvestment() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8 text-gray-800">
      
      {/* Գլխավոր բլոկ */}
      <div className="bg-white border-0 shadow-none p-6 sm:p-10 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          Ներդրումային ծառայություններ
        </h2>
        
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Բանկն իր հաճախորդներին ներդրումային ծառայություններ է մատուցում ինչպես տեղական, այնպես էլ՝ միջազգային շուկաներում: Բանկի կողմից առաջարկվող ծառայությունները հասանելի են իրավաբանական և ֆիզիկական անձ հանդիսացող հաճախորդներին:
        </p>

        {/* Ինչպես դառնալ հաճախորդ */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Ինչպե՞ս դառնալ հաճախորդ:
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Ներդրումային ծառայություններից օգտվելու համար անհրաժեշտ է Բանկում ունենալ ընթացիկ բանկային հաշիվ, որի բացման համար պահանջվող փաստաթղթերին կարող եք ծանոթանալ{' '}
            <Link to="/biznes/accounts" className="text-[#6200EE] font-semibold underline hover:text-purple-700">
              այստեղ
            </Link>:
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Բրոքերային հաշվի բացման համար անհրաժեշտ է այցելել Բանկի գլխամասային գրասենյակ:
          </p>
        </div>

        {/* Հասցե և Հետադարձ կապ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
          <div className="space-y-2">
            <h4 className="font-bold text-gray-900">Հասցե՝</h4>
            <p className="text-gray-600 text-sm sm:text-base">Երևան, Հանրապետության 44/2</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-gray-900">Հետադարձ կապ՝</h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Հեռ.՝ 374 10 205555<br />
              Էլ. հասցե՝ <a href="mailto:invest@evoca.am" className="text-[#6200EE] underline">invest@evoca.am</a>
            </p>
          </div>
        </div>

      </div>

      {/* Ուշադրություն բլոկ (առանց ֆոնի գույնի, բորդերի և ստվերի) */}
      <div className="bg-transparent border-0 shadow-none p-6 sm:p-8 space-y-3">
        <h4 className="font-bold text-[#6200EE] text-base sm:text-lg tracking-wide">
          ՈՒՇԱԴՐՈՒԹՅՈՒՆ
        </h4>
        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
          Ֆինանսական շուկաներում գործարքների իրականացման հետ կապված ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ: Բանկը ՉԻ ՓՈԽՀԱՏՈՒՑԵԼՈՒ հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի կողմից անբարեխիղճ վարքագծի արդյունքում:
        </p>
      </div>

    </div>
  );
}