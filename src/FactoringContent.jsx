import React from 'react';

export default function FactoringContent() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8 text-gray-800">
      
      {/* Վերնագիր և նկարագրություն */}
      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          Ֆակտորինգային Ֆինանսավորում
        </h1>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Եթե ցանկանում եք լինել շուկայում ավելի մրցունակ, <span className="text-[#6200EE] font-semibold">Evocabank</span>-ը կօգնի ձեզ՝ առաջարկելով Ֆակտորինգային ֆինանսավորում։
        </p>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          <span className="text-[#6200EE] font-semibold">Evocabank</span>-ն իրականացնում է Ֆակտորինգային ֆինանսավորում նաև «Հայաստանի արտահանման ապահովագրական գործակալություն» ԱՓԲԸ-ի հետ համագործակցության պայմանագրի շրջանակում։
        </p>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Ֆակտորինգ կարող եք ձևակերպել մեր Գլխամասային գրասենյակում և ցանկացած մասնաճյուղում՝ բացառությամբ «Հանրապետության», «Երևան Մոլ», «Էրեբունի» մասնաճյուղերի։
        </p>
      </div>

      {/* Պայմաններ և սակագներ */}
      <div className="space-y-4 pt-4">
        <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
          Պայմաններ և սակագներ
        </h3>

        <div className="bg-white border border-purple-100 rounded-xl overflow-hidden shadow-none">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                
                {/* 1 */}
                <tr className="border-b border-purple-50/60">
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-500 w-1/12 text-center align-top">1.</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-700 w-5/12 align-top">Ֆակտորինգի սահմանաչափ</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-semibold text-gray-900 w-6/12 align-top">
                    3,000,000 - 1,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ
                  </td>
                </tr>

                {/* 2 */}
                <tr className="border-b border-purple-50/60">
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-500 text-center align-top">2.</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-700 align-top">Հաճախորդները</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-semibold text-gray-900 align-top">
                    ՀՀ ռեզիդենտ իրավաբանական անձինք և անհատ ձեռնարկատերեր, ովքեր գրանցված գործունեություն են ծավալում առնվազն 12 ամիս
                  </td>
                </tr>

                {/* 3 */}
                <tr className="border-b border-purple-50/60">
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-500 text-center align-top">3.</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-700 align-top">Ֆակտորինգային սահմանաչափի գործողության ժամկետ</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-semibold text-gray-900 align-top">
                    Մինչև 24 ամիս
                  </td>
                </tr>

                {/* 4 */}
                <tr className="border-b border-purple-50/60">
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-500 text-center align-top">4.</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-700 align-top">Ֆինանսավորման ժամկետ</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-semibold text-gray-900 align-top space-y-1">
                    <p>• Մինչև 120 օր</p>
                    <p>• «Հայաստանի արտահանման ապահովագրական գործակալություն» ԱՓԲԸ-ի հետ համագործակցության պայմանագրի շրջանակում՝ մինչև 270 օր</p>
                  </td>
                </tr>

                {/* 5 */}
                <tr className="border-b border-purple-50/60">
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-500 text-center align-top">5.</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-700 align-top">Ֆինանսավորման չափ</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-semibold text-gray-900 align-top">
                    Ներկայացված հաշիվ ապրանքագրի մինչև 90%
                  </td>
                </tr>

                {/* 6 */}
                <tr className="border-b border-purple-50/60">
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-500 text-center align-top">6.</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-700 align-top">Ֆինանսավորման գումարի տարեկան տոկոսադրույք և արժույթ</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-semibold text-gray-900 align-top space-y-2">
                    <div className="flex justify-between border-b border-purple-50 pb-1"><span className="text-gray-700">ՀՀ դրամ</span><span className="font-bold">սկսած 17%-ից</span></div>
                    <div className="flex justify-between border-b border-purple-50 pb-1"><span className="text-gray-700">ԱՄՆ դոլար</span><span className="font-bold">սկսած 10%-ից</span></div>
                    <div className="flex justify-between border-b border-purple-50 pb-1"><span className="text-gray-700">Եվրո</span><span className="font-bold">սկսած 9%-ից</span></div>
                    <div className="flex justify-between"><span className="text-gray-700">ՌԴ ռուբլի</span><span className="font-bold">սկսած 17%-ից</span></div>
                  </td>
                </tr>

                {/* 7 */}
                <tr className="border-b border-purple-50/60">
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-500 text-center align-top">7.</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-700 align-top">Ֆինանսավորման գումարի և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տուժանք</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-semibold text-gray-900 align-top">
                    ժամկետանց գումարի համար՝ օրական 0.04%, ժամկետանց տոկոսադրույքի համար՝ օրական 0.4%
                  </td>
                </tr>

                {/* 8 */}
                <tr className="border-b border-purple-50/60">
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-500 text-center align-top">8.</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-700 align-top">Վաղաժամկետ մարում</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-semibold text-gray-900 align-top">
                    Վաղաժամկետ մարման տուժանքներ չեն կիրառվում
                  </td>
                </tr>

                {/* 9 */}
                <tr className="border-b border-purple-50/60">
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-500 text-center align-top">9.</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-700 align-top">Սահմանաչափի հաստատման վճար</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-semibold text-gray-900 align-top">
                    Սահմանաչափի 0.1%, նվազագույնը՝ 10,000 ՀՀ դրամ, առավելագույնը՝ 700,000 ՀՀ դրամ
                  </td>
                </tr>

                {/* 10 */}
                <tr className="border-b border-purple-50/60">
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-500 text-center align-top">10.</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-700 align-top">Գործող սահմանաչափի ավելացում</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-semibold text-gray-900 align-top">
                    Ավելացվող մասի 0.1%, նվազագույնը՝ 10,000 ՀՀ դրամ
                  </td>
                </tr>

                {/* 11 */}
                <tr className="border-b border-purple-50/60">
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-500 text-center align-top">11.</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-700 align-top">Հետ գնվող միջնորդավճար</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-semibold text-gray-900 align-top">
                    0.5%, min 10,000 ՀՀ դրամ
                  </td>
                </tr>

                {/* 12 */}
                <tr className="border-b border-purple-50/60">
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-500 text-center align-top">12.</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-700 align-top">Սահմանաչափի վերահաստատում</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-semibold text-gray-900 align-top">
                    10,000 ՀՀ դրամ
                  </td>
                </tr>

                {/* 13 */}
                <tr className="border-b border-purple-50/60">
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-500 text-center align-top">13.</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-700 align-top">Փաստաթղթերի ուսումնասիրման վճար</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-semibold text-gray-900 align-top">
                    10,000 ՀՀ դրամ
                  </td>
                </tr>

                {/* 14 */}
                <tr>
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-500 text-center align-top">14.</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-medium text-gray-700 align-top">Ապահովվածություն</td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-semibold text-gray-900 align-top">
                    Հաճախորդի/պարտապանների անձնական երաշխավորություն՝ ըստ պահանջի, առանձին դեպքերում՝ բարձր ռիսկայնության գործարքների դեպքում կարող է պահանջվել նաև լրացուցիչ գրավ
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}