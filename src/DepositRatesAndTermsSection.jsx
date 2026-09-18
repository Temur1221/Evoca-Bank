import React from 'react';

export default function DepositRatesAndTermsSection() {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 space-y-8 text-gray-800">
      
      {/* Գլխավոր վերնագիր */}
      <h2 className="text-2xl font-extrabold text-gray-900 tracking-wide uppercase">
        Պայմաններ և սակագներ
      </h2>

      {/* Աղյուսակ 1: Տարեկան տոկոսադրույքը ըստ ժամկետների */}
      <div className="bg-white border border-purple-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-gray-700 text-center mb-2">
          Տարեկան տոկոսադրույքը ըստ ժամկետների
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-purple-50 text-[#6200EE]">
                <th className="p-3 border border-purple-100 rounded-tl-xl font-semibold">
                  Ներդրվող գումարների սահմանաչափեր ըստ արժույթի
                </th>
                <th className="p-3 border border-purple-100 text-center font-semibold">91 - 180 օր</th>
                <th className="p-3 border border-purple-100 text-center font-semibold">181 - 365 օր</th>
                <th className="p-3 border border-purple-100 text-center font-semibold">366 - 365 օր</th>
                <th className="p-3 border border-purple-100 text-center font-semibold">366 - 730 օր</th>
                <th className="p-3 border border-purple-100 rounded-tr-xl text-center font-semibold">731 - 1095 օր</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-purple-100 font-medium">200,000 - 25,000,000 ՀՀ դրամ</td>
                <td className="p-3 border border-purple-100 text-center">8%</td>
                <td className="p-3 border border-purple-100 text-center">9%</td>
                <td className="p-3 border border-purple-100 text-center">9.5%</td>
                <td className="p-3 border border-purple-100 text-center">10%</td>
                <td className="p-3 border border-purple-100 text-center">10.5%</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="p-3 border border-purple-100 font-medium">500 - 50,000 ԱՄՆ դոլար</td>
                <td className="p-3 border border-purple-100 text-center">2%</td>
                <td className="p-3 border border-purple-100 text-center">3%</td>
                <td className="p-3 border border-purple-100 text-center">4%</td>
                <td className="p-3 border border-purple-100 text-center">4.5%</td>
                <td className="p-3 border border-purple-100 text-center">5%</td>
              </tr>
              <tr>
                <td className="p-3 border border-purple-100 font-medium">500 - 40,000 եվրո</td>
                <td className="p-3 border border-purple-100 text-center">1%</td>
                <td className="p-3 border border-purple-100 text-center">1.5%</td>
                <td className="p-3 border border-purple-100 text-center">2%</td>
                <td className="p-3 border border-purple-100 text-center">2.5%</td>
                <td className="p-3 border border-purple-100 text-center">3%</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="p-3 border border-purple-100 font-medium">20,000 - 2,000,000 ՌԴ ռուբլի</td>
                <td className="p-3 border border-purple-100 text-center">5%</td>
                <td className="p-3 border border-purple-100 text-center">5.5%</td>
                <td className="p-3 border border-purple-100 text-center">6%</td>
                <td className="p-3 border border-purple-100 text-center">-</td>
                <td className="p-3 border border-purple-100 text-center">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Պայմանների կետեր */}
      <div className="bg-white border border-purple-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-4 text-sm leading-relaxed">
        
        <div className="flex items-start gap-3">
          <span className="font-bold text-[#6200EE]">1.</span>
          <p>
            Ավանդն ընդունվում է ֆիզիկական և իրավաբանական անձանցից, ինչպես Բանկի գործունեության վայրում, այնպես էլ՝ «EvocaTOUCH» կամ «EvocaONLINE» հեռակառավարման համակարգերի միջոցով։
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="font-bold text-[#6200EE]">2.</span>
          <p>
            Տոկոսագումարների պարբերաբար (ամսական, եռամսյակային, կիսամյակային, տարեկան) վճարման դեպքում ՀՀ դրամով ավանդների համար սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.5%-ով պակաս տոկոսադրույքը, իսկ ԱՄՆ դոլարով, եվրոյով և ՌԴ ռուբլով ավանդների համար սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.25%-ով պակաս տոկոսադրույքը։
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="font-bold text-[#6200EE]">3.</span>
          <p>
            Ավանդատուն կարող է համալրել (ավելացնել) իր Ավանդի գումարը սկսած նվազագույնը 200.000 ՀՀ դրամից, 500 ԱՄՆ դոլարից, 500 եվրոյից կամ 50,000 ՌԴ ռուբլուց։ Ավելացման հնարավորությամբ ավանդ ներդնելու դեպքում ՀՀ դրամով ավանդների համար սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.5%-ով պակաս տոկոսադրույքը, իսկ ԱՄՆ դոլարով, եվրոյով և ՌԴ ռուբլով ավանդների համար սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.25%-ով պակաս տոկոսադրույքը։ Կատարված բոլոր համալրումների հանրագումարը չի կարող գերազանցել Ավանդի ներդրման սկզբնական գումարը։ Ավանդային պայմանագրի գործողության վերջին 3 (երեք) ամիսների ընթացքում Ավանդի գումարի համալրում չի թույլատրվում։
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="font-bold text-[#6200EE]">4.</span>
          <p>
            Ավանդատուի պահանջով ավանդային պայմանագիրը ժամկետից շուտ լուծելու դեպքում Բանկը իրականացնում է Ավանդի տոկոսագումարների վերահաշվարկ հետևյալ դրույքաչափերով՝
          </p>
        </div>

        {/* Աղյուսակ 2: Վերահաշվարկի դրույքաչափեր */}
        <div className="overflow-x-auto my-4 pl-6">
          <table className="w-full max-w-2xl text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-purple-50 text-[#6200EE]">
                <th className="p-3 border border-purple-100 rounded-tl-xl font-semibold">ավանդի արժույթ</th>
                <th className="p-3 border border-purple-100 text-center font-semibold">մինչև 365 օր</th>
                <th className="p-3 border border-purple-100 rounded-tr-xl text-center font-semibold">366 - 1095 օր</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-purple-100 font-medium">ՀՀ դրամ</td>
                <td className="p-3 border border-purple-100 text-center">0.5 %</td>
                <td className="p-3 border border-purple-100 text-center">3.5 %</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="p-3 border border-purple-100 font-medium">ԱՄՆ դոլար</td>
                <td className="p-3 border border-purple-100 text-center">0.1 %</td>
                <td className="p-3 border border-purple-100 text-center">0.5 %</td>
              </tr>
              <tr>
                <td className="p-3 border border-purple-100 font-medium">եվրո</td>
                <td className="p-3 border border-purple-100 text-center">0.1 %</td>
                <td className="p-3 border border-purple-100 text-center">1.5 %</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="p-3 border border-purple-100 font-medium">ՌԴ ռուբլի</td>
                <td className="p-3 border border-purple-100 text-center">0.1 %</td>
                <td className="p-3 border border-purple-100 text-center">3 %</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-start gap-3">
          <span className="font-bold text-[#6200EE]">5.</span>
          <p>Ավանդի գումարի մասնակի նվազեցում չի թույլատրվում։</p>
        </div>

      </div>

      {/* Լրացուցիչ պայմաններ */}
      <div className="bg-white border border-purple-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-[#6200EE]">
          Լրացուցիչ պայմաններ
        </h3>

        <div className="space-y-3 text-sm leading-relaxed">
          <div className="flex items-start gap-3">
            <span className="font-bold text-[#6200EE]">1.</span>
            <p>Ավանդատուի ցանկության դեպքում Բանկը կարող է տրամադրել վճարային քարտ առանց տարեկան սպասարկման վճարի գանձման։</p>
          </div>

          <div className="flex items-start gap-3">
            <span className="font-bold text-[#6200EE]">2.</span>
            <p>Տրամադրվող վճարային քարտի տեսակները ըստ ներդրվող ավանդի գումարի սահմանվում է ստորև.</p>
          </div>
        </div>

        {/* Աղյուսակ 3: Վճարային քարտերի տեսակներ */}
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-purple-50 text-[#6200EE]">
                <th className="p-3 border border-purple-100 rounded-tl-xl font-semibold">ավանդի արժույթ/քարտի տեսակ</th>
                <th className="p-3 border border-purple-100 text-center font-semibold">mastercard standard/ visa classic</th>
                <th className="p-3 border border-purple-100 text-center font-semibold">mastercard gold/visa gold</th>
                <th className="p-3 border border-purple-100 rounded-tr-xl text-center font-semibold">VISA Infinite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-purple-100 font-medium">ՀՀ դրամ</td>
                <td className="p-3 border border-purple-100 text-center">200,000 - 25,000,000</td>
                <td className="p-3 border border-purple-100 text-center">25,000,001 - 50,000,000</td>
                <td className="p-3 border border-purple-100 text-center">50,000,001 և ավել</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="p-3 border border-purple-100 font-medium">ԱՄՆ դոլար</td>
                <td className="p-3 border border-purple-100 text-center">1,000 - 50,000</td>
                <td className="p-3 border border-purple-100 text-center">50,001 - 100,000</td>
                <td className="p-3 border border-purple-100 text-center">100,001 և ավել</td>
              </tr>
              <tr>
                <td className="p-3 border border-purple-100 font-medium">եվրո</td>
                <td className="p-3 border border-purple-100 text-center">1,000 - 40,000</td>
                <td className="p-3 border border-purple-100 text-center">40,001 - 100,000</td>
                <td className="p-3 border border-purple-100 text-center">100,001 և ավել</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="p-3 border border-purple-100 font-medium">ՌԴ ռուբլի</td>
                <td className="p-3 border border-purple-100 text-center">50,000 - 3,000,000</td>
                <td className="p-3 border border-purple-100 text-center">3,000,001 - 7,000,000</td>
                <td className="p-3 border border-purple-100 text-center">7,000,001 և ավել</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}