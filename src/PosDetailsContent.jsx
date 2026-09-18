import React from 'react';
import { Link } from 'react-router-dom';

export default function PosDetailsContent() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12 text-gray-800">
      
      {/* Ներածական տեքստ */}
      <div className="space-y-4 text-gray-700 text-base leading-relaxed">
        <p>
          Ձեր գնորդները կարող են գնումներ կատարել իրենց միջազգային <strong>VISA, Mastercard</strong> և տեղական <strong>ArCa</strong> վճարային քարտերով:
        </p>
        <p>
          <strong>POS-ը հասանելի կլինի ինչպես ձեր կայքում, այնպես էլ’ մոբայլ հավելվածում:</strong>
        </p>
      </div>

      {/* Ինչու՞ տեղադրել POS */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-900">
          Իսկ ինչու՞ տեղադրել Evocabank-ի POS տերմինալ՝
        </h3>

        <ul className="space-y-4 list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            <strong>Evocabank</strong>-ը POS-ով կատարված վաճառքներից կգանձի նվազագույն միջնորդավճարներ՝ հատուկ ձեր բիզնեսի համար:
          </li>
          <li>
            Ապասարկման կետի գրանցման համար անհրաժեշտ POS, ՀԻՄ-POS, mPOS, VENDISTA տերմինալների տեղադրման <strong>ստանդարտ սակագներն ու պայմանները</strong> հետևյալն են՝
          </li>
        </ul>

        {/* Բաժին 1. Չի համընկնում կամ գերազանցում է 150,000,000 դրամը */}
        <div className="space-y-4 pl-4 border-l-4 border-purple-200">
          <p className="font-semibold text-gray-800">
            — Եթե վաճառետի գործունեության տեսակը չի համընկնում <span className="text-purple-700 underline cursor-pointer">ԿԲ կողմից ներկայացված տեսակի կոդին</span> կամ գերազանցում է տարեկան 150,000,000 ՀՀ դրամի իրացման շրջանառության շեմը՝
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200 text-sm text-left">
              <thead>
                <tr className="bg-purple-900 text-white">
                  <th className="border border-gray-300 p-3">Գործարքի տեսակ</th>
                  <th className="border border-gray-300 p-3">Արցա /ArCa/ վճարային համակարգի քարտերով կատարված գործարքի դեպքում</th>
                  <th className="border border-gray-300 p-3">Արցա համակարգի ներքո թողարկված mastercard, visa քարտերի դեպքում</th>
                  <th className="border border-gray-300 p-3">Ոչ արցա համակարգի ներքո թողարկված mastercard, visa քարտերի դեպքում</th>
                  <th className="border border-gray-300 p-3">QR կոդով վճարման դեպքում</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3 font-medium">Վճարվող գումարի չափ</td>
                  <td className="border border-gray-300 p-3">1.5%</td>
                  <td className="border border-gray-300 p-3">1.7%</td>
                  <td className="border border-gray-300 p-3">2.0%</td>
                  <td className="border border-gray-300 p-3">1%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border-collapse border border-gray-200 text-sm text-left max-w-xl">
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">Յուրաքանչյուր տերմինալից գանձվող ամսական միջնորդավճարի նվազագույն չափը /ՀՀ դրամ/</td>
                  <td className="border border-gray-300 p-3 font-medium">Բանկի կողմից տրամադրված POS տերմինալ</td>
                  <td className="border border-gray-300 p-3 text-purple-700 font-bold">10,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3"></td>
                  <td className="border border-gray-300 p-3 font-medium">Բանկի կողմից տրամադրված ՀԻՄ-POS</td>
                  <td className="border border-gray-300 p-3 text-purple-700 font-bold">7,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3"></td>
                  <td className="border border-gray-300 p-3 font-medium">Տրամադրված ՀԻՄ-POS տերմինալ</td>
                  <td className="border border-gray-300 p-3 text-purple-700 font-bold">3,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">mPOS և VENDISTA տերմինալների մասով ամսական միջնորդավճարների նվազագույն չափ չի սահմանվում:</p>
        </div>

        {/* Բաժին 2. Համընկնում է */}
        <div className="space-y-4 pl-4 border-l-4 border-purple-200 pt-4">
          <p className="font-semibold text-gray-800">
            — Եթե վաճառետի գործունեության տեսակը համընկնում է <span className="text-purple-700 underline cursor-pointer">ԿԲ կողմից ներկայացված տեսակի կոդին</span> և չի գերազանցում տարեկան 150,000,000 ՀՀ դրամի իրացման շրջանառության շեմը՝
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200 text-sm text-left">
              <thead>
                <tr className="bg-purple-900 text-white">
                  <th className="border border-gray-300 p-3">Գործարքի տեսակ</th>
                  <th className="border border-gray-300 p-3">Արցա /ArCa/ վճարային համակարգի քարտերով կատարված գործարքի դեպքում</th>
                  <th className="border border-gray-300 p-3">ՀՀ տարածքում գործող բանկերի կողմից թողարկված mastercard, visa քարտերի դեպքում ստանդարտ</th>
                  <th className="border border-gray-300 p-3">ՀՀ տարածքում գործող բանկերի կողմից թողարկված սրտի քարտերի դեպքում</th>
                  <th className="border border-gray-300 p-3">Արտասահմանյան բանկերի կողմից թողարկված mastercard, visa, սրտի քարտերի դեպքում</th>
                  <th className="border border-gray-300 p-3">QR կոդով վճարման դեպքում</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3 font-medium">Վճարվող գումարի չափ</td>
                  <td className="border border-gray-300 p-3">POS 0.5%</td>
                  <td className="border border-gray-300 p-3">POS 0.8%</td>
                  <td className="border border-gray-300 p-3">1.7%</td>
                  <td className="border border-gray-300 p-3">2.0%</td>
                  <td className="border border-gray-300 p-3">1%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border-collapse border border-gray-200 text-sm text-left max-w-xl">
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3 text-xs">50,000 ՀՀ դրամին քարտային շրջանառության չափը չգերազանցելու դեպքում յուրաքանչյուր տերմինալից գանձվող ամսական ընդհանուր միջնորդավճարների առավելագույն սահմանաչափ ՀՀ դրամով</td>
                  <td className="border border-gray-300 p-3 font-medium">Ք. Երևան</td>
                  <td className="border border-gray-300 p-3 text-purple-700 font-bold">5,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3"></td>
                  <td className="border border-gray-300 p-3 font-medium">Մարզային քաղաքներ</td>
                  <td className="border border-gray-300 p-3 text-purple-700 font-bold">3,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3"></td>
                  <td className="border border-gray-300 p-3 font-medium">Գյուղեր</td>
                  <td className="border border-gray-300 p-3 text-purple-700 font-bold">1,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">mPOS և VENDISTA տերմինալների մասով ամսական միջնորդավճարների նվազագույն չափ չի սահմանվում:</p>
        </div>

        <ul className="space-y-4 list-disc list-inside text-gray-700 leading-relaxed pt-4">
          <li><strong>Վճարման պարզ գործընթաց,</strong> ձեր գնորդները վճարումը կատարում են 1 քայլով:</li>
          <li><strong>Անվճար տեխնիկական խորհրդատվություն</strong> և տեխնիկական սպասարկում Բանկի մասնագետների կողմից:</li>
          <li><strong>Անհատական մոտեցում</strong> ձեր բիզնեսին ու կաչին:</li>
        </ul>
      </div>

      {/* Հայտի բաժին */}
      <div className="space-y-4 bg-purple-50 p-6 rounded-2xl border border-purple-100">
        <p className="text-gray-800 font-medium">
          POS տերմինալ տեղադրելու համար <Link to="/biznes/trade/digital/request" className="text-purple-700 font-bold underline hover:text-purple-900">լրացրեք հայտը հենց հիմա</Link>:
        </p>
        <p className="text-gray-700">
          Մեր մասնագետը 1 աշխատանքային օրում կապ կհաստատի ձեզ հետ, կներկայացնի պայմանները, կպատասխանի ձեր բոլոր հարցերին և կպատրաստի գործընթացի համար անհրաժեշտ բոլոր փաստաթղթերը:
        </p>
        <p className="font-bold text-gray-900 pt-2">
          Կառուցեք ձեր ապագան Evocabank-ի հետ:
        </p>
      </div>

    </div>
  );
}