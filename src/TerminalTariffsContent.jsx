import React from 'react';

export default function TerminalTariffsContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-gray-800">
      
      {/* Վերնագիր և ներածություն */}
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
          Սակագներ
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          Տերմինալները փողոցում, ինչպես նաև առևտրի կետերում վճարումների համար նախատեսված սարք է։ 
          Տերմինալների միջոցով Դուք նաև կարող եք կատարել բանկային ծառայություններ՝ առանց բանկ այցելելու՝ հեշտ և հարմար տարբերակով։
        </p>
        <p className="text-gray-700 text-base font-medium">
          Եթե Ձեր տարածքում չկա Evocabank-ի մասնաճյուղ, Դուք կարող եք կատարել Ձեր վճարումները հետևյալ տերմինալների միջոցով.
        </p>
      </div>

      {/* 1. Telcell */}
      <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex items-center space-x-4">
          {/* Այստեղ տեղադրում ենք լոգոն */}
          <div className="h-10 flex items-center">
            <img src="https://www.evoca.am/file_manager/telcell-evoca-logo.png" className='w-[200px]' alt="Telcell" />
          </div>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          Telcell վճարային տերմինալների միջոցով Դուք կարող եք 24/7 ռեժիմով կատարել ընթացիկ և քարտային հաշիվների համալրում և վարկի մարումներ։
        </p>
        <p className="text-gray-700 text-sm">
          Evocabank-ի մասնաճյուղերում տեղադրված TelCell տերմինալներից օգտվելիս գործում է <strong className="text-purple-700">0% միջնորդավճար</strong>։ Այլ վայրերում տեղադրված TelCell տերմինալով Evocabank-ին վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 text-sm text-left">
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3 font-medium">Հաշվի համալրում</td>
                <td className="border border-gray-300 p-3">մինչև 100,000 դրամը ներառյալ</td>
                <td className="border border-gray-300 p-3 text-purple-700 font-bold">300 ՀՀ դրամ</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-medium">Քարտային հաշվի համալրում</td>
                <td className="border border-gray-300 p-3">մինչև 100,000 դրամը ներառյալ</td>
                <td className="border border-gray-300 p-3 text-purple-700 font-bold">300 ՀՀ դրամ</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3 font-medium">Վարկի մարում</td>
                <td className="border border-gray-300 p-3">մինչև 100,000 դրամը ներառյալ</td>
                <td className="border border-gray-300 p-3 text-purple-700 font-bold">300 ՀՀ դրամ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. uPay */}
      <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="h-10 flex items-center">
            <img src="https://www.evoca.am/file_manager/uPay-evoca.png" className='w-[100px]' alt="uPay" />
          </div>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          uPay-ի միջոցով վճարումներ կարող եք կատարել՝ ինչպես uPay հավելվածով, այնպես էլ այցելելով Ucom սպասարկման կենտրոններ։
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 text-sm text-left">
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3 font-medium">Վարկերի մարում և փոխանցում բանկային հաշվին</td>
                <td className="border border-gray-300 p-3">մինչև 35,000 դրամի դեպքում</td>
                <td className="border border-gray-300 p-3 text-purple-700 font-bold">200 ՀՀ դրամ</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-medium"></td>
                <td className="border border-gray-300 p-3">35,000-ից ավելի ՀՀ դրամի դեպքում</td>
                <td className="border border-gray-300 p-3 text-purple-700 font-bold">0.6%, բայց ոչ պակաս 300 ՀՀ դրամ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. ՄոբիԴրամ */}
      <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="h-10 flex items-center">
            <img src="https://www.evoca.am/file_manager/mobidram-evoca.jpg"className='w-[200px]' />
          </div>
        </div>
        <p className="text-gray-700 text-sm">
          ՄոբիԴրամի տերմինալներով Evocabank-ին վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 text-sm text-left">
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3 font-medium" rowSpan="2">Վարկի մարում</td>
                <td className="border border-gray-300 p-3">մինչև 50,000 դրամի դեպքում</td>
                <td className="border border-gray-300 p-3 text-purple-700 font-bold">200 ՀՀ դրամ</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">50,001 - 100,000 դրամի դեպքում</td>
                <td className="border border-gray-300 p-3 text-purple-700 font-bold">300 ՀՀ դրամ</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3 font-medium" rowSpan="2">Բանկային հաշվի/քարտի համալրում</td>
                <td className="border border-gray-300 p-3">մինչև 50,000 դրամի դեպքում</td>
                <td className="border border-gray-300 p-3 text-purple-700 font-bold">200 ՀՀ դրամ</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">50,001 - 100,000 դրամի դեպքում</td>
                <td className="border border-gray-300 p-3 text-purple-700 font-bold">300 ՀՀ դրամ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. iDram */}
      <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="h-10 flex items-center">
            <img src="https://www.evoca.am/file_manager/idram-evoca.png" className='w-[200px]' />
          </div>
        </div>
        <p className="text-gray-700 text-sm">
          iDram հավելվածով կարող եք կատարել գործարքներ հետևյալ միջնորդավճարներով՝
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 text-sm text-left">
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3 font-medium" rowSpan="3">Վարկի մարում</td>
                <td className="border border-gray-300 p-3">մինչև 15,000 դրամի դեպքում</td>
                <td className="border border-gray-300 p-3 text-purple-700 font-bold">100 ՀՀ դրամ</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">15,001 - 50,000 դրամի դեպքում</td>
                <td className="border border-gray-300 p-3 text-purple-700 font-bold">200 ՀՀ դրամ</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3">50,001 - 100,000 դրամի դեպքում</td>
                <td className="border border-gray-300 p-3 text-purple-700 font-bold">300 ՀՀ դրամ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. EasyPay */}
      <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="h-10 flex items-center">
            <img src="https://www.evoca.am/file_manager/easypay-evoca.png"className='w-[200px]' />
          </div>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          2,000-ից ավել վճարային տերմինալ, որոնց ցանկին և հասցեներին կարող եք ծանոթանալ այստեղ։
        </p>
        <p className="text-gray-700 text-sm">
          Evocabank-ի մասնաճյուղերում տեղադրված EasyPay տերմինալներից օգտվելիս գործում է <strong className="text-purple-700">0% միջնորդավճար</strong>։ Այլ վայրերում տեղադրված EasyPay տերմինալներով Evocabank-ին վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 text-sm text-left">
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3 font-medium">Հաշվի համալրում</td>
                <td className="border border-gray-300 p-3">1,000 - 100,000 դրամի դեպքում</td>
                <td className="border border-gray-300 p-3 text-purple-700 font-bold">300 ՀՀ դրամ (նվազագույնը՝ 1,200 ՀՀ դրամ)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-medium">Քարտային հաշվի համալրում</td>
                <td className="border border-gray-300 p-3">1,000 - 100,000 դրամի դեպքում</td>
                <td className="border border-gray-300 p-3 text-purple-700 font-bold">300 ՀՀ դրամ (նվազագույնը՝ 1,200 ՀՀ դրամ)</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3 font-medium">Վարկի մարում</td>
                <td className="border border-gray-300 p-3">1,000 - 100,000 դրամի դեպքում</td>
                <td className="border border-gray-300 p-3 text-purple-700 font-bold">300 ՀՀ դրամ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}