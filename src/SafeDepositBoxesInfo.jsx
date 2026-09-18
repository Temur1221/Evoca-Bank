import React from "react";

export default function SafeDepositBoxesInfo() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8 text-gray-800">
      {/* Վերևի նկարագրական տեքստեր */}
      <div className="space-y-4 mb-10 text-sm md:text-base leading-relaxed">
        <p className="font-semibold text-gray-900">
          Առաջարկում ենք 3 չափսի պահատուփեր՝ փոքր, միջին, մեծ։
        </p>
        <p>
          Պահատուփերը փակվում են 2 բանալիով, որոնցից մեկը տրամադրում ենք ձեզ, իսկ մյուսը պահվում է մեզ մոտ։ Մեզ մոտ պահատուփը հնարավոր է բացել միայն երկու բանալիների միաժամանակյա կիրառմամբ։ Ձեզ տրամադրված բանալի օրինակը պարտավոր եք վերադարձնել՝ պահատուփի վարձակալության պայմանագրի գործողության ժամկետի վերջում։
        </p>
        <p>
          Պահատուփերը վարձակալության ենք տրամադրում անհատական պայմանագրի հիման վրա, ձեր նախընտրած վարձակալության ժամկետով։ Վարձակալության գինը կախված է պահարանի չափից և ժամկետից՝ ըստ մեր սակագների։
        </p>
        <p>
          12 ամսից երկար ժամկետով վարձակալելու դեպքում պահատուփերի սակագները սահմանվում են պայմանագրային կարգով։
        </p>
        <p>
          Անհատական պահատուփից կարելի է օգտվել միայն մեր սպասարկման օրերին և ժամերին։
        </p>
      </div>

      {/* Աղյուսակ 1: Ռեզիդենտների համար */}
      <div className="mb-12">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
          Չհրկիզվող անհատական պահարանների վարձակալման սակագներ
        </h3>
        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-purple-50 text-purple-900 border-b border-gray-200">
                <th className="p-4 border-r border-gray-200 w-1/4">ժամկետ</th>
                <th className="p-4 text-center border-r border-gray-200">փոքր</th>
                <th className="p-4 text-center border-r border-gray-200">միջին</th>
                <th className="p-4 text-center">մեծ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">14 օր</td>
                <td className="p-4 text-center border-r border-gray-200">5,000 ՀՀ դրամ</td>
                <td className="p-4 text-center border-r border-gray-200">7,000 ՀՀ դրամ</td>
                <td className="p-4 text-center">10,000 ՀՀ դրամ</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">1 ամիս</td>
                <td className="p-4 text-center border-r border-gray-200">7,000 ՀՀ դրամ</td>
                <td className="p-4 text-center border-r border-gray-200">10,000 ՀՀ դրամ</td>
                <td className="p-4 text-center">12,000 ՀՀ դրամ</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">3 ամիս</td>
                <td className="p-4 text-center border-r border-gray-200">10,000 ՀՀ դրամ</td>
                <td className="p-4 text-center border-r border-gray-200">15,000 ՀՀ դրամ</td>
                <td className="p-4 text-center">20,000 ՀՀ դրամ</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">6 ամիս</td>
                <td className="p-4 text-center border-r border-gray-200">15,000 ՀՀ դրամ</td>
                <td className="p-4 text-center border-r border-gray-200">20,000 ՀՀ դրամ</td>
                <td className="p-4 text-center">25,000 ՀՀ դրամ</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">12 ամիս</td>
                <td className="p-4 text-center border-r border-gray-200">20,000 ՀՀ դրամ</td>
                <td className="p-4 text-center border-r border-gray-200">30,000 ՀՀ դրամ</td>
                <td className="p-4 text-center">40,000 ՀՀ դրամ</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">Երկարաժամկետ</td>
                <td colSpan="3" className="p-4 text-center font-medium text-purple-700">պայմանագրային</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">Պահարանի բանալու կորուստ կամ վնասում</td>
                <td colSpan="3" className="p-4 text-center font-medium">20,000 ՀՀ դրամ</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">Պահարանի վնասում</td>
                <td colSpan="3" className="p-4 text-center font-medium">հասցված վնասի հատուցումը</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">Պայմանագրի ժամկետի ավարտին բանալին չհանձնում</td>
                <td colSpan="3" className="p-4 text-center font-medium">յուրաքանչյուր ուշացրած օրվա համար 1000 ՀՀ դրամ</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">Իրերը հանձնի այլ տարածքում պահպանելու վճար</td>
                <td colSpan="3" className="p-4 text-center font-medium">ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Աղյուսակ 2: Ոչ ռեզիդենտների համար */}
      <div className="mb-12">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
          Չհրկիզվող անհատական պահարանների վարձակալում օտարերկրյա քաղաքացիների համար
        </h3>
        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-purple-50 text-purple-900 border-b border-gray-200">
                <th className="p-4 border-r border-gray-200 w-1/4">ժամկետ</th>
                <th className="p-4 text-center border-r border-gray-200">փոքր</th>
                <th className="p-4 text-center border-r border-gray-200">միջին</th>
                <th className="p-4 text-center">մեծ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">14 օր</td>
                <td className="p-4 text-center border-r border-gray-200">25,000 ՀՀ դրամ</td>
                <td className="p-4 text-center border-r border-gray-200">35,000 ՀՀ դրամ</td>
                <td className="p-4 text-center">50,000 ՀՀ դրամ</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">1 ամիս</td>
                <td className="p-4 text-center border-r border-gray-200">35,000 ՀՀ դրամ</td>
                <td className="p-4 text-center border-r border-gray-200">50,000 ՀՀ դրամ</td>
                <td className="p-4 text-center">60,000 ՀՀ դրամ</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">3 ամիս</td>
                <td className="p-4 text-center border-r border-gray-200">50,000 ՀՀ դրամ</td>
                <td className="p-4 text-center border-r border-gray-200">75,000 ՀՀ դրամ</td>
                <td className="p-4 text-center">100,000 ՀՀ դրամ</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">6 ամիս</td>
                <td className="p-4 text-center border-r border-gray-200">75,000 ՀՀ դրամ</td>
                <td className="p-4 text-center border-r border-gray-200">100,000 ՀՀ դրամ</td>
                <td className="p-4 text-center">125,000 ՀՀ դրամ</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">12 ամիս</td>
                <td className="p-4 text-center border-r border-gray-200">100,000 ՀՀ դրամ</td>
                <td className="p-4 text-center border-r border-gray-200">125,000 ՀՀ դրամ</td>
                <td className="p-4 text-center">150,000 ՀՀ դրամ</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">Երկարաժամկետ</td>
                <td colSpan="3" className="p-4 text-center font-medium text-purple-700">պայմանագրային</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">Պահարանի բանալու կորուստ կամ վնասում</td>
                <td colSpan="3" className="p-4 text-center font-medium">20,000 ՀՀ դրամ</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">Պահարանի վնասում</td>
                <td colSpan="3" className="p-4 text-center font-medium">հասցված վնասի հատուցումը</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">Պայմանագրի ժամկետի ավարտին բանալին չհանձնում</td>
                <td colSpan="3" className="p-4 text-center font-medium">յուրաքանչյուր ուշացրած օրվա համար 1000 ՀՀ դրամ</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-200">Իրերը հանձնի այլ տարածքում պահպանելու վճար</td>
                <td colSpan="3" className="p-4 text-center font-medium">ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Նշում */}
      <div className="text-xs text-gray-500 mb-12">
        Նշում - միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ-ն։
      </div>

      {/* Փաստաթղթեր բաժին */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Փաստաթղթեր
        </h3>
        
        <a 
          href="https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-[#f8f7fc] hover:bg-[#f1edf8] border border-gray-100 rounded-2xl p-4 transition-colors group no-underline"
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-purple-600">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2H14L18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V4C6 2.89543 6.89543 2 8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V6H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11V16M12 16L10 14M12 16L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-gray-900 font-medium text-sm md:text-base group-hover:text-purple-700 transition-colors">
              Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}