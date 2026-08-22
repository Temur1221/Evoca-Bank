import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CreditHistoryPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 font-sans">
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
        <NavLink to="/" className="hover:text-[#6200EE] transition-colors">Գլխավոր</NavLink>
        <span>›</span>
        <NavLink to="/anhat" className="hover:text-[#6200EE] transition-colors">Անհատ</NavLink>
        <span>›</span>
        <span className="text-gray-800 font-medium">Վարկային պատմություն և սքոր</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c] mb-8">
        Վարկեր
      </h1>

      <div className="flex flex-wrap bg-[#6200EE] text-white rounded-t-xl overflow-hidden mb-8">
        <NavLink
          to="/anhat/loans"
          className={({ isActive }) =>
            `py-4 px-6 text-sm sm:text-base font-semibold transition-colors ${
              isActive
                ? 'bg-[#4B00B5] text-white border-b-4 border-white'
                : 'hover:bg-[#5200C6] text-purple-200'
            }`
          }
        >
          Վարկեր
        </NavLink>

        <NavLink
          to="/anhat/credit-history"
          className={({ isActive }) =>
            `py-4 px-6 text-sm sm:text-base font-semibold transition-colors ${
              isActive
                ? 'bg-[#4B00B5] text-white border-b-4 border-white'
                : 'hover:bg-[#5200C6] text-purple-200'
            }`
          }
        >
          Վարկային պատմություն և սքոր
        </NavLink>

        <NavLink
          to="/anhat/important-info"
          className={({ isActive }) =>
            `py-4 px-6 text-sm sm:text-base font-semibold transition-colors ${
              isActive
                ? 'bg-[#4B00B5] text-white border-b-4 border-white'
                : 'hover:bg-[#5200C6] text-purple-200'
            }`
          }
        >
          Կարևոր տեղեկատվություն
        </NavLink>
      </div>

      <div className="bg-white p-6 sm:p-10 rounded-2xl border border-gray-100 shadow-sm text-[#1c1c1c] space-y-8">
        <section>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Վարկային պատմություն և սքոր
          </h2>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            Կարևոր տեղեկատվություն վարկային պատմության վերաբերյալ
          </h3>
          <p className="text-sm sm:text-base text-gray-700 font-semibold">
            Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի ձեր <span className="font-bold uppercase">ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ</span> վրա:
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-[#6200EE] text-lg">●</span>
            <h4 className="text-lg font-bold">Ինչ է վարկային պատմությունը</h4>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5">
            «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի համաձայն՝ վարկային տեղեկատվությունը վարկային տեղեկատվության սուբյեկտի կողմից ստանձնած պարտավորությունների վերաբերյալ տեղեկատվությունն է, որը ցույց է տալիս վարկային տեղեկատվության սուբյեկտի պարտքերը, վճարումները, վճարումների սովորությունները կամ պարտավորությունների կամ դրանց կատարման վերաբերյալ տեղեկատվություններ։
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5">
            Այն, որպես կանոն, օգտագործվում է ֆինանսական կազմակերպությունների կողմից վարկերի տրամադրման, ինչպես նաև արտադրող և վաճառող կամ ծառայություններ մատուցող կազմակերպությունների կողմից՝ ապառիկով ապրանքների/ծառայությունների իրացման վերաբերյալ որոշում կայացնելու ընթացքում։
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-[#6200EE] text-lg">●</span>
            <h4 className="text-lg font-bold">Որոնք են վարկային պատմության ձևավորման աղբյուրները</h4>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5">
            Վարկային պատմության ձևավորման աղբյուրներն են ԱՔՌԱ գործընկերները (բանկերը, վարկային կազմակերպությունները, ապահովագրական ընկերությունները, հետաձգված վճարումներով գործարքներ իրականացնող կազմակերպությունները, ինչպես նաև՝ հանրային տվյալների բազաներից ՀՀ կառավարության սահմանված կարգով վարկային բյուրոյին անձանց վերաբերյալ տեղեկություններ տրամադրող պետական մարմինները, որոնք տրամադրում են վարկային տեղեկատվության սուբյեկտի վերաբերյալ տեղեկություններ/տվյալներ)։
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-[#6200EE] text-lg">●</span>
            <h4 className="text-lg font-bold">Ինչ է վարկային բյուրոն</h4>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5">
            Վարկային բյուրոն իրականացնում է իրավաբանական և ֆիզիկական անձանց ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկատվության (վարկային տեղեկատվության) հավաքագրում, մշակում, պահպանում, տրամադրում, ինչպես նաև դրանց հիման վրա վարկային զեկույցի պատրաստման գործունեություն։
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5 font-semibold">
            Վարկային բյուրոյի ծառայությունների շնորհիվ յուրաքանչյուր իրավաբանական կամ ֆիզիկական անձ հնարավորություն է ստանում․
          </p>
          <ul className="list-disc pl-12 space-y-2 text-sm sm:text-base text-gray-600">
            <li>
              Ժամանակին կատարելով իր ֆինանսական պարտավորությունները՝ կերտել դրական վարկային պատմություն և օգտագործել այն որպես ծանրակշիռ ակտիվ ֆինանսական ծառայություններից արտոնյալ պայմաններով օգտվելու համար։
            </li>
            <li>
              Ճիշտ կառավարել սեփական ֆինանսական պարտավորությունները և մշտապես տեղեկացված լինել սեփական ֆինանսական պարտավորությունների կատարման ընդհանուր պատկերի մասին։
            </li>
          </ul>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5">
            Վարկային բյուրոյի ծառայությունները թույլ են տալիս վարկատուներին (բանկեր, վարկային կազմակերպություններ, ինչպես նաև ապառիկ վաճառք իրականացնող կամ ծառայություններ մատուցող ընկերություններ) կանխել անխելամիտ պարտավորությունների ստանձնումը, կրճատել անհույս պարտավորությունները և աջակցել պարտավորությունների ժամանակին կատարմանը։
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-[#6200EE] text-lg">●</span>
            <h4 className="text-lg font-bold">Ինչ է վարկային զեկույցը</h4>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5">
            Վարկային զեկույցը գրավոր կամ էլեկտրոնային փաստաթուղթ է, որը պարունակում է վարկային տեղեկատվության սուբյեկտի (ֆիզիկական կամ իրավաբանական) և նրա կողմից ստանձնած ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկատվություն։
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5">
            Զեկույցը կազմված է ԱՔՌԱ գործընկեր կազմակերպություններից ստացված տվյալների հիման վրա և արտացոլում է հարցման պահից վերջին 5 տարվա վարկային տվյալները։
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-[#6200EE] text-lg">●</span>
            <h4 className="text-lg font-bold">Որքան ժամանակ է պահպանվում վարկային պատմությունը</h4>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5">
            Համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի 11-րդ հոդվածի դրույթների, «վարկային բյուրոյի կողմից տրամադրվող վարկային զեկույցներում չպետք է ներառվի վարկային զեկույցի տրամադրման պահին նախորդող հինգ տարուց ավելի վաղեմության տեղեկատվություն»։
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-[#6200EE] text-lg">●</span>
            <h4 className="text-lg font-bold">Ինչպես բարելավել վարկային պատմությունը</h4>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5">
            Նախ անհրաժեշտ է լիովին մարել նախկինում գոյացած ժամկետանց պարտավորությունների վճարումները: Բացի այդ, ներկա պահին գործող վարկերի մասով անհրաժեշտ է բացառել ժամկետանց՝ նույնիսկ մեկ օրվա կտրվածքով պարտավորությունների գոյացումը։
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-[#6200EE] text-lg">●</span>
            <h4 className="text-lg font-bold">Ուր դիմել եթե վարկային պատմությունը սխալ է</h4>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5">
            Եթե վարկառուի վարկային պատմության մեջ առկա են սխալ կամ թերի տվյալներ,ապա պարզաբանման և ուղղման նպատակով վարկառուն՝ համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի 20-րդ հոդվածի դրույթների, կարող է այդ մասին տեղեկացնել վարկային բյուրոյին կամ ուղղակիորեն դիմել տեղեկատվություն տրամադրող սուբյեկտներին (վարկային տեղեկատվության աղբյուրին)։ Տեղեկացումը կարող է իրականացվել համապատասխան գրավոր դիմում վարկային բյուրոյին ներկայացնելու միջոցով կամ էլեկտրոնային եղանակով՝ առանց ռեժիմում Իմ ԱՔՌԱ անձնական գրասենյակից։ ԱՔՌԱ-ի կողմից տրամադրված վարկային զեկույցների վերաբերյալ հաճախորդների բողոքների ընդունման, մշակման, քննարկման և վերջիններիս արձագանքման գործընթացը, գործողությունների հաջորդականությունը սահմանվում է «ԱՔՌԱ Քրեդիտ Ռեփորթինգ» ՓԲԸ-ի «Վեճերի լուծման ընթացակարգ»-ով։
          </p>
        </section>

        <section className="space-y-6 pt-4 border-t border-gray-100">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
            Վարկի տրամադրման վերաբերյալ որոշման կայացման չափանիշները
          </h3>

          <div className="space-y-3">
            <p className="font-bold text-gray-800 text-sm sm:text-base">
              Դրական որոշման կայացման չափանիշները՝
            </p>
            <ul className="list-disc pl-10 space-y-2 text-sm sm:text-base text-gray-600">
              <li>Մեր կողմից ընդունելի գրավադրվող գույք և երաշխավորությունները,</li>
              <li>Մշտական բնակության վայրը,</li>
              <li>Կայուն եկամտի աղբյուրը,</li>
              <li>Դրական կամ չեզոք վարկային պատմությունը,</li>
              <li>Արժանահավատ և լիարժեք փաստաթղթերը:</li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-bold text-gray-800 text-sm sm:text-base">
              Բացասական որոշման կայացման չափանիշները՝
            </p>
            <ul className="list-disc pl-10 space-y-2 text-sm sm:text-base text-gray-600">
              <li>Ոչ արժանահավատ փաստաթղթեր ներկայացնելը,</li>
              <li>Բացասական վարկային պատմությունը,</li>
              <li>Եկամտի աղբյուրի ռիսկայնությունը (անկայուն եկամուտներ, ոչ հստակ պարբերականությամբ եկամուտներ),</li>
              <li>Գրավի պայմանագրի կամ երաշխավորության համաձայնագրերի կնքման համար անհրաժեշտ փաստաթղթեր չներկայացնելը:</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
            Վարկային սքոր
          </h3>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Բանկը կիրառում է իր կողմից մշակված վարկային սքորը վարկավորման վերաբերյալ որոշումների կայացման ժամանակ։ Վարկային սքորը հաճախորդի վարկային պատմության և որոշակի ցուցանիշների ուսումնասիրության հիման վրա ձևավորվող վիճակագրական գնահատականն է, որն արտահայտում է հավանականությունը հայցվող վարկը ժամանակին և պատշաճ մարելու գծով։ Վարկային պատմությունը ներառվում է սքորի հաշվարկի մեջ դիմելու պահից վերջին 5 տարվա վարկերով։
          </p>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Բանկի ներքին սքոր գնահատականի վրա ազդող հիմնական գործոններն են՝ <span className="font-bold">ՖԱՅՔՕ սքորը</span> (բարձր ՖԱՅՔՕ սքոր – դրական ազդեցություն), <span className="font-bold">գործող վարկերի քանակը</span> (գործող վարկերի քանակի ավելացում – բացասական ազդեցություն), <span className="font-bold">վարկային բեռը</span> (բարձր վարկային բեռ – բացասական ազդեցություն), <span className="font-bold">վարկային պարտավորությունների ժամանակին կատարման փաստը</span> (ժամկետանցների առկայություն – բացասական ազդեցություն), <span className="font-bold">նոր վարկային հայտեր ներկայացնելու հաճախականությունը</span> (հայտերի քանակի ավելացում – բացասական ազդեցություն), <span className="font-bold">հաճախորդի աշխատանքային փորձը</span> (քիչ փորձառություն – բացասական ազդեցություն), <span className="font-bold">եկամուտների մեծությունը</span> (բարձր եկամուտների առկայություն – դրական ազդեցություն)։
          </p>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Վարկային պատմությունը և/կամ սքոր գնահատականը հնարավոր է բարելավել վարկն առանց ժամկետանցների մարելու, նպատակային օգտագործելու, վարկերի մնացորդային գումարը և քանակը նվազեցնելու, տրված երաշխավորությունների գծով պարտավորությունները ժամանակին կատարելու դեպքում։ Վարկային պատմության և սքոր վատթարացումից խուսափելու նպատակով հաճախորդները չպետք է ունենան ժամկետանցներ, անհիմն ավելացնեն վարկային ծանրաբեռնվածությունը, վարկերի քանակը <span className="font-bold">հաճախակի վարկավորման հարցումներ ուղարկեն տարբեր կազմակերպություններին</span>, հանդիսանան երաշխավոր անվստահելի անձանց համար։
          </p>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-2">
            Վարկային պատմության և ՖԱՅՔՕ սքորի վերաբերյալ առավել մանրամասն տեղեկատվություն կարելի է ստանալ այցելելով{' '}
            <a href="https://www.abcfinance.am" target="_blank" rel="noopener noreferrer" className="text-[#6200EE] font-medium hover:underline">
              https://www.abcfinance.am
            </a>
            ,{' '}
            <a href="https://acra.am" target="_blank" rel="noopener noreferrer" className="text-[#6200EE] font-medium hover:underline">
              Հաճախ տրվող հարցեր - ԱՔՌԱ acra.am
            </a>{' '}
            և{' '}
            <a href="https://www.acra.am" target="_blank" rel="noopener noreferrer" className="text-[#6200EE] font-medium hover:underline">
              www.acra.am
            </a>{' '}
            կայքեր։
          </p>
        </section>

        <section className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
            Փաստաթղթեր
          </h3>

          <a 
            href="https://www.evoca.am/files/global_files/1/information-summary-loan-07-04-2026.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors w-full sm:w-auto inline-flex group cursor-pointer"
          >
            <div className="w-10 h-10 bg-purple-100 text-[#6200EE] rounded-lg flex items-center justify-center font-bold text-xs uppercase group-hover:bg-[#6200EE] group-hover:text-white transition-colors">
              PDF
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 group-hover:text-[#6200EE] transition-colors">
                Տեղեկատվական ամփոփագիր (Վարկային արտադրանքներ)
              </p>
              <span className="text-xs text-gray-500">07.04.2026</span>
            </div>
          </a>
        </section>
      </div>
    </div>
  );
}