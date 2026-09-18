import React from 'react';
import { Link } from 'react-router-dom';

export default function VPosDetailsContent() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12 text-gray-800">
      
      {/* Ներածական տեքստ */}
      <div className="space-y-4 text-gray-700 text-base leading-relaxed">
        <p>
          <strong>Evocabank</strong>-ը կապահովի ձեր կայքում V-POS տերմինալի տեղադրումը: Այն հնարավորություն կտա ձեզ <strong>խուսափել լրացուցիչ ծրագրային ծախսերից</strong>, տերմինալիզացիայից և հետագա ծրագրային ապահովումից:
        </p>
        <p>
          Ձեր գնորդները կարող են գնումներ կատարել ձեր կայքից ու վճարել դրանց համար իրենց միջազգային <strong>VISA, Mastercard</strong> և տեղական <strong>ArCa</strong> վճարային քարտերով:
        </p>
        <p>
          <strong>V-POS-ը հասանելի կլինի ինչպես ձեր կայքում, այնպես էլ’ մոբայլ հավելվածում:</strong>
        </p>
      </div>

      {/* Ինչու՞ տեղադրել V-POS */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900">
          Իսկ ինչու՞ տեղադրել Evocabank-ի V-POS տերմինալ՝
        </h3>

        <ul className="space-y-4 list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            <strong>Օնլայն վաճառքների շնորհիվ կաճեն ձեր եկամուտները:</strong>
          </li>
          <li>
            <strong>Evocabank</strong>-ը V-POS-ով կատարված վաճառքներից կգանձի նվազագույն միջնորդավճարներ՝ հատուկ ձեր բիզնեսի համար:
          </li>
        </ul>

        {/* Սակագների աղյուսակ */}
        <div className="my-6 overflow-x-auto">
          <p className="font-semibold text-gray-800 mb-3">
            Սպասարկման կետի գրանցման համար անհրաժեշտ V-POS տերմինալների տեղադրման ստանդարտ սակագներն են՝
          </p>
          
          <table className="min-w-full border-collapse border border-gray-200 text-sm text-left">
            <thead>
              <tr className="bg-purple-900 text-white">
                <th className="border border-gray-300 p-3">Գործարքի տեսակ</th>
                <th className="border border-gray-300 p-3">Արցա /ArCa/ վճարային համակարգի քարտերով կատարված գործարքի դեպքում</th>
                <th className="border border-gray-300 p-3">ՀՀ տարածքում գործող բանկերի կողմից թողարկված mastercard, visa քարտերի դեպքում</th>
                <th className="border border-gray-300 p-3">Արտասահմանյան բանկերի կողմից թողարկված mastercard, visa քարտերի դեպքում</th>
                <th className="border border-gray-300 p-3">QR կոդով վճարման դեպքում</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3 font-medium">Վճարվող գումարի չափ<span className="text-purple-600">[1]</span></td>
                <td className="border border-gray-300 p-3">1.50%</td>
                <td className="border border-gray-300 p-3">1.80%</td>
                <td className="border border-gray-300 p-3">2.00%</td>
                <td className="border border-gray-300 p-3">1%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-medium">200,000 /երկու հարյուր հազար/ ՀՀ դրամը գերազանցող պարագայում</td>
                <td colSpan="4" className="border border-gray-300 p-3 text-center text-gray-500">—</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3 font-medium">Վճարային էջի ստանդարտից դուրս դիզայնի պատվիրման պարագայում</td>
                <td colSpan="4" className="border border-gray-300 p-3 text-purple-700 font-semibold">20000<span className="text-xs">[2]</span></td>
              </tr>
            </tbody>
          </table>
          
          <div className="text-xs text-gray-500 mt-2 space-y-1">
            <p>[1] վճարված դրույքի առանձնահատկություններից և շրջանառությունից սակագները կարող են փոփոխվել</p>
            <p>[2] ներառյալ կիրառելի բոլոր հարկերը</p>
          </div>
        </div>

        <ul className="space-y-4 list-disc list-inside text-gray-700 leading-relaxed">
          <li><strong>Վճարումներն անվտանգ են</strong> և գործում են 3D Secure Code անվտանգության համակարգերը:</li>
          <li><strong>Վճարման պարզ գործընթաց,</strong> ձեր գնորդները վճարումը կատարում են 1 քայլով:</li>
          <li><strong>Անվճար տեխնիկական խորհրդատվություն</strong> և տեխնիկական սպասարկում Բանկի մասնագետների կողմից:</li>
          <li><strong>Անհատական մոտեցում</strong> ձեր բիզնեսին ու կայքին:</li>
        </ul>
      </div>

      {/* Տեղադրման հայտի բաժին */}
      <div className="space-y-4 bg-purple-50 p-6 rounded-2xl border border-purple-100">
        <p className="text-gray-800 font-medium">
          V-POS տերմինալ տեղադրելու համար լրացրեք <Link to="/biznes/trade/digital/request" className="text-purple-700 font-bold underline hover:text-purple-900">Տերմինալի տեղադրման հայտ</Link> հիմա։
        </p>

        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Մեր մասնագետը 5 աշխատանքային օրում կապ կհաստատի ձեզ հետ, կներկայացնի պայմանները, կպատասխանի ձեր բոլոր հարցերին և կպատրաստի գործընթացի համար անհրաժեշտ բոլոր փաստաթղթերը:</li>
          <li>Պայմանագրի ստորագրումից հետո V-POS-ը կտեղադրվի ձեր բիզնեսի կայքում:</li>
        </ol>
      </div>

      {/* Բիզնես վարկ POS տերմինալի շրջանառության հիման վրա */}
      <div className="space-y-6 pt-6 border-t border-gray-200">
        <h3 className="text-2xl font-black text-gray-900">
          Կառուցեք ձեր բիզնեսի թվային ապագան:
        </h3>
        <p className="text-gray-700">
          Evocabank-ում այսուհետ գործում են բիզնես վարկ և բիզնես օվվերդրաֆտ POS տերմինալի շրջանառության հիման վրա:
        </p>

        {/* Նկար */}
        <div className="my-6 flex justify-center">
          <div className="max-w-md w-full rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <img 
              src="https://www.evoca.am/file_manager/pos2-600x315.jpg" 
              alt="Բիզնես վարկ POS տերմինալի շրջանառության հիման վրա" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <h4 className="text-xl font-bold text-purple-900">
          Բիզնես վարկ POS տերմինալի շրջանառության հիման վրա
        </h4>
        
        <p className="text-gray-700">
          Եթե ունեք փոքր ու միջին բիզնես և իրականացնում եք անկանխիկ գործարքներ, ապա այս բիզնես վարկը ձեզ համար է։ Մեզ մոտ փոքր և միջին բիզնեսներն ունեն հնարավորություն ձևակերպել արագ բիզնես վարկեր իրենց կարճաժամկետ ֆինանսական խնդիրները լուծելու համար:
        </p>

        <div className="space-y-3">
          <h5 className="font-bold text-gray-900">Վարկի համար կարող են դիմել՝</h5>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>ՀՀ ռեզիդենտ անհատ ձեռնարկատեր և իրավաբանական անձինք, ովքեր գրանցված գործունեություն են ծավալում առնվազն 12 ամիս</li>
            <li>Այն հաճախորդները, ովքեր Evocabank-ի հետ ունեն կնքված POS տերմինալի համագործակցության պայմանագիր</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h5 className="font-bold text-gray-900">Որպես վարկի ապահովության միջոց կարող են հանդիսանալ՝</h5>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>POS տերմինալի շրջանառություն</li>
            <li>Անհրաժեշտության դեպքում ֆիզիկական և/կամ իրավաբանական անձի երաշխավորություն</li>
          </ul>
        </div>

        <p className="text-gray-700 font-medium">
          Օգտվեք մեր կողմից տրվող հնարավորությունից և գրանցեք ձեր նոր բիզնես հաջողությունները:
        </p>

        <p className="text-sm text-gray-600">
          Վարկի պայմաններին կարող եք ծանոթանալ <Link to="/biznes/loans" className="text-purple-700 font-bold underline hover:text-purple-900">այստեղ</Link>։
        </p>
      </div>

      {/* Բիզնես օվվերդրաֆտ POS տերմինալի շրջանառության հիման վրա (Նոր ավելացված մաս) */}
      <div className="space-y-6 pt-6 border-t border-gray-200">
        <h4 className="text-xl font-bold text-purple-900">
          Բիզնես օվվերդրաֆտ POS տերմինալի շրջանառության հիման վրա
        </h4>

        <p className="text-gray-700">
          Evocabank-ում կարող եք ձեռք բերել բիզնես օվվերդրաֆտ՝ առանց ավելորդ թղթաբանության և ժամանակի կորստի։ Եթե կան կարճաժամկետ ֆինանսական խնդիրներ կամ պարզապես ցանկանում եք ավելի զարգացնել բիզնեսը, ապա մեզ մոտ շատ արագ և պարզ տարբերակով կարող եք ձևակերպել բիզնես օվվերդրաֆտ։
        </p>

        <div className="space-y-3">
          <h5 className="font-bold text-gray-900">Վարկի համար կարող են դիմել՝</h5>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>ՀՀ ռեզիդենտ իրավաբանական և անհատ ձեռնարկատեր անձինք, ովքեր գրանցված գործունեություն են ծավալում առնվազն 12 ամիս</li>
            <li>Այն հաճախորդները, ովքեր Evocabank-ի հետ ունեն կնքված POS տերմինալի համագործակցության առնվազն 6 ամսվա պայմանագիր</li>
          </ul>
        </div>

        <p className="text-sm text-gray-600">
          Օվվերդրաֆտի պայմաններին կարող եք ծանոթանալ <Link to="/biznes/loans" className="text-purple-700 font-bold underline hover:text-purple-900">այստեղ</Link>:
        </p>

        <p className="text-sm text-gray-600">
          Մեր մյուս բիզնես վարկերին կարող եք ծանոթանալ <Link to="/biznes/loans" className="text-purple-700 font-bold underline hover:text-purple-900">այստեղ</Link>:
        </p>

        <p className="text-sm text-gray-600 pt-4">
          Հարցերի դեպքում մեր թիմի հետ կարող եք կապ հաստատել հետևյալ <Link to="/biznes/trade/digital/request" className="text-purple-700 font-bold underline hover:text-purple-900">հղումով</Link>:
        </p>
      </div>

    </div>
  );
}