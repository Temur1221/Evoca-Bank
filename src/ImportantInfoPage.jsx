import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ImportantInformationPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 font-sans">
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
        <NavLink to="/" className="hover:text-[#6200EE] transition-colors">Գլխավոր</NavLink>
        <span>›</span>
        <NavLink to="/anhat" className="hover:text-[#6200EE] transition-colors">Անհատ</NavLink>
        <span>›</span>
        <span className="text-gray-800 font-medium">Կարևոր տեղեկատվություն</span>
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

      <div className="bg-white p-6 sm:p-10 rounded-2xl border border-gray-100 shadow-sm text-[#1c1c1c] space-y-10">
        
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#6200EE]">
            Ուշադրություն
          </h2>

          <ul className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed list-disc pl-5">
            <li>
              Տոկոսագումարների գծով հաշվարկները կատարվում են 365 օրացուցային օրերի համար, եթե վճարման օրը ոչ աշխատանքային է, ապա վճարում եք դրան հաջորդող աշխատանքային օրվա ընթացքում:
            </li>
            
            <li>
              Հիփոթեքային վարկերի դեպքում Դուք իրավունք ունեք ժամկետից շուտ իրականացնել վարկի մասնակի կամ ամբողջական մարում, որի դեպքում Բանկի կողմից տույժեր չեն կիրառվում:
            </li>

            <li>
              Վարկի մարման ժամանակացույցը խախտելու դեպքում վարկի ժամկետանց մասի վրա կարող է կիրառվել ՀՀ կենտրոնական բանկի կողմից սահմանված բանկային տոկոսի հաշվարկային դրույքը, որը ամրագրվում է վարկային պայմանագրով:
            </li>

            <li>
              Դուք իրավունք ունեք նախքան վարկային պայմանագիր կնքելը ծանոթանալ պայմանագրի նախագծի հետ:
            </li>

            <li className="font-semibold text-gray-900">
              ՎԱՐԿ ՍՏԱՆԱԼՈՒ ՀԱՄԱՐ ԴԻՄԵԼԻՍ ՎԱՐԿԱՏՈՒՆ ՁԵԶ ԿՏՐԱՄԱԴՐԻ ՍՊԱՌՈՂԱԿԱՆ ՎԱՐԿԻ ԷԱԿԱՆ ՊԱՅՄԱՆՆԵՐԻ ԱՆՀԱՏԱԿԱՆ ԹԵՐԹԻԿ, ՈՐՈՒՄ ԿՆԵՐԿԱՅԱՑՎԵՆ ՁԵԶ ՏՐԱՄԱԴՐՎԵԼԻՔ ՎԱՐԿԻ ԱՆՀԱՏԱԿԱՆ ՊԱՅՄԱՆՆԵՐԸ:
            </li>

            <li>
              Վարկի տոկոսագումարները հաշվարկվում են ԱՆՎԱՆԱԿԱՆ ՏՈԿՈՍԱԴՐՈՒՅՔԻ հիման վրա, իսկ ՏԱՐԵԿԱՆ ՓԱՍՏԱՑԻ ՏՈԿՈՍԱԴՐՈՒՅՔԸ ցույց է տալիս, թե որքան կարժենա վարկը ձեզ համար տոկոսագումարները և այլ վճարները սահմանված ժամկետներում և չափերով կատարելու դեպքում: Տարեկան փաստացի տոկոսադրույքի հաշվարկման կարգին (ՀՀ ԿԲ Կանոնակարգ 8/01) կարող եք ծանոթանալ ՀՀ Կենտրոնական բանկի պաշտոնական կայքում{' '}
              <a href="https://www.cba.am" target="_blank" rel="noopener noreferrer" className="text-[#6200EE] font-medium hover:underline">
                www.cba.am
              </a>:
            </li>

            <li>
              Արտարժույթով տրամադրվող վարկերի գծով արտարժույթի փոխարժեքի փոփոխությունները կարող են ազդեցություն ունենալ վարկի մարումների վրա:
            </li>

            <li>
              Բանկը Ձեզ, ՀՀ օրենսդրությամբ սահմանված կարգով և դեպքերում Ձեր նախընտրած հաղորդակցման եղանակով 30-օրյա պարբերականությամբ կտրամադրի վարկի վերաբերյալ քաղվածք:
            </li>

            <li>
              Պայմանագրի գործողության ընթացքում բողոքներ ունենալու դեպքում կարող եք դրանք ներկայացնել Բանկին: Ձեր կողմից ներկայացված բողոքների քննության գործընթացը ներկայացված է{' '}
              <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-[#6200EE] font-medium hover:underline">
                www.evoca.am
              </a>{' '}
              կայքում և Բանկի գործունեության վայրերում: Դուք հնարավորություն ունեք պայմանագրից բխող բողոք-պահանջները ՀՀ օրենսդրությամբ սահմանված կարգով ներկայացնել Ֆինանսական համակարգի հաշտարարին: Ձեր իրավունքները կարող եք պաշտպանել նաև դատարանի միջոցով: Իրավունքների պաշտպանության գործընթացը նկարագրված է{' '}
              <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-[#6200EE] font-medium hover:underline">
                www.evoca.am
              </a>{' '}
              կայքում և Բանկի գործունեության վայրերում տեղակայված «Ինչ անել, եթե բողոք ունեք» ձևաթերթում:
            </li>

            <li className="font-semibold text-gray-900">
              ԶԳՈՒՇԱՑՈՒՄ՝ ՊԱՐՏԱՎՈՐՈՒԹՅԱՆ ՄԱՐՄԱՆ ԳՐԱՖԻԿՈՎ ՍԱՀՄԱՆՎԱԾ ԺԱՄԿԵՏՆԵՐՈՒՄ ՁԵՐ ԿՈՂՄԻՑ ՊԱՐՏԱՎՈՐՈՒԹՅՈՒՆԸ ՉԿԱՏԱՐՎԵԼՈՒ ԿԱՄ ԹԵՐԻ ԿԱՏԱՐՎԵԼՈՒ ԴԵՊՔԵՐՈՒՄ ԲԱՆԿԸ 3 ԱՇԽԱՏԱՆՔԱՅԻՆ ՕՐՎԱ ԸՆԹԱՑՔՈՒՄ ՁԵՐ ՏՎՅԱԼՆԵՐԸ ՊԱՐՏԱՎՈՐՈՒԹՅԱՆ ՉԿԱՏԱՐՄԱՆ, ԹԵՐԻ ԿԱՏԱՐՄԱՆ ՄԱՍԻՆ ՏԵՂԵԿՈՒԹՅՈՒՆՆԵՐԸ ՈՒՂԱՐԿՈՒՄ Է ՎԱՐԿԱՅԻՆ ԲՅՈՒՐՈ:
            </li>

            <li>
              <span className="font-bold text-gray-900">ՏԵՂԵԿԱՏՈՒ․</span> Հարգելի հաճախորդ, տեղեկացնում ենք, որ Ձեր կողմից ներկայացված վարկի ստացման դիմում-հայտերի քանակը, այդ թվույմ՝ հեռահար եղանակներով (տարբեր տեխնիկածրագրային լուծումներով և հավելվածներով), անկախ հաստատումից կամ մերժումից, բացասական ազդեցություն է ունենալու Ձեր վարկային ամփոփ գնահատականի վրա:
            </li>

            <li>
              Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի Ձեր <span className="font-bold text-gray-900">ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ</span> վրա: <span className="font-bold text-gray-900">ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅՈՒՆԸ</span> Ձեր ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկությունների այն ամբողջությունն է, որը հավաքվում, կուտակվում և պարբերաբար նորացվում է Ձեզ վարկ տրամադրած կազմակերպությունների նկատմամբ Վարկային բյուրոյի կողմից: Վարկային պատմությունը ուսումնասիրվում է վարկավորում իրականացնող կազմակերպությունների կողմից Ձեր վարկային հայտը դիտարկելու ընթացքում և մեծ դեր է խաղում վարկի տրամադրման որոշման կայացման հարցում:
            </li>

            <li className="font-semibold text-gray-900">
              Վարկային պայմանագրով Ձեր կողմից ստանձնած պարտավորությունները չկատարելու կամ ոչ պատշաճ կատարելու դեպքում դուք կարող եք զրկվել անշարժ գույքի նկատմամբ Ձեր իրավունքներից:
            </li>

            <li className="font-semibold text-gray-900 uppercase">
              Տոկոսագումարների և վարկի գումարի մարումները ժամանակին չկատարելու դեպքում, գրավադրված գույքը կարող է օրենքով սահմանված կարգով բռնագանձվել:
            </li>

            <li>
              Վարկային պարտավորությունների չկատարման հետևանքով գրավի հաշվին պարտավորությունները մարելու դեպքում, եթե Ձեր վարկային պարտավորությունները ծածկելու համար գրավի արժեքը չի բավարարում, ապա Բանկը ՀՀ օրենսդրությամբ սահմանված կարգով կարող է կատարել վարկային պարտավորությունների մարումներ Ձեր այլ գույքերի հաշվին:
            </li>
          </ul>
        </section>

        <section className="pt-8 border-t border-gray-100 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1c1c]">
            Տարեկան փաստացի տոկոսադրույքի հաշվարկման օրինակ
          </h2>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Բանկը իր կողմից տրամադրած վարկի դիմաց հաշվարկում է տարեկան փաստացի տոկոսադրույք (Annual Percentage Rate կամ APR)՝ սպառողի կրեդիտավորման ընդհանուր ծախսը՝ արտահայտված տրամադրված կրեդիտի տարեկան տոկոսով և հաշվարկված՝ հիմք ընդունելով հետևյալ բանաձևը․
          </p>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex justify-center items-center overflow-x-auto text-[#1c1c1c]">
            <div className="text-lg sm:text-xl font-serif">
              <span className="italic">A</span> = &sum;<sub><span className="italic">n</span>=1</sub><sup><span className="italic">N</span></sup> 
              <span className="inline-block mx-2 text-center align-middle">
                <span className="block border-b border-gray-800 pb-0.5"><span className="italic">K<sub>n</sub></span></span>
                <span className="block pt-0.5">(1 + <span className="italic">i</span>)<sup><span className="italic">D<sub>n</sub></span> / 365</sup></span>
              </span>
            </div>
          </div>

          <div className="space-y-2 text-sm sm:text-base text-gray-700">
            <p className="font-semibold text-gray-900">Որտեղ՝</p>
            <ul className="space-y-1.5 pl-5">
              <li><span className="font-bold text-[#6200EE]">i</span> – տարեկան փաստացի տոկոսադրույք,</li>
              <li><span className="font-bold text-[#6200EE]">A</span> – վարկի սկզբնական գումար,</li>
              <li><span className="font-bold text-[#6200EE]">n</span> – վարկի մարմանն ուղղված վճարի թիվ,</li>
              <li><span className="font-bold text-[#6200EE]">N</span> – վարկի մարմանն ուղղված վերջին վճարի թիվ,</li>
              <li><span className="font-bold text-[#6200EE]">K<sub>n</sub></span> – վարկի մարմանն ուղղված n-րդ վճարի գումար,</li>
              <li><span className="font-bold text-[#6200EE]">D<sub>n</sub></span> – վարկի տրամադրման օրվանից մինչև վարկի մարմանն ուղղված n-րդ վճարի կատարման օրն ընկած ժամանակահատված՝ արտահայտված օրերի թվով:</li>
            </ul>
          </div>

          <div className="space-y-3 pt-2">
            <p className="font-semibold text-gray-900 text-sm sm:text-base">
              Ենթադրենք բանկը սպառողին տրամադրում է վարկ հետևյալ պայմաններով՝
            </p>
            <ul className="list-disc pl-8 space-y-1.5 text-sm sm:text-base text-gray-700">
              <li>Վարկի գումար – 700,000 ՀՀ դրամ,</li>
              <li>Անվանական տարեկան տոկոսադրույք – 18 %,</li>
              <li>Վարկի մարման ժամկետը – 12 ամիս,</li>
              <li>Վարկի մարման եղանակը – անուիտետային (վարկի գումարի և տոկոսագումարի հանրագումարը մարվում է ամենամսյա հավասարաչափ):</li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-gray-900 text-sm sm:text-base">
              Վարկի տրամադրման դիմաց առկա են վճարներ՝
            </p>
            <ul className="list-disc pl-8 space-y-1.5 text-sm sm:text-base text-gray-700">
              <li>Վարկային հայտի ուսումնասիրման միանվագ վճար – 1,000 ՀՀ դրամ:</li>
            </ul>
          </div>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Անուիտետային եղանակով վարկի մարման դեպքում անհրաժեշտ է որոշել վարկի մարմանն ուղղված ամսական վճարի գումարը, հետևյալ բանաձևով․
          </p>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex justify-center items-center overflow-x-auto text-[#1c1c1c]">
            <div className="text-lg sm:text-xl font-serif">
              <span className="italic">K</span> = <span className="italic">A</span> &times; 
              <span className="inline-block mx-2 text-center align-middle">
                <span className="block border-b border-gray-800 pb-0.5">(1 + <span className="italic">R</span>)<sup><span className="italic">P</span></sup> &times; <span className="italic">R</span></span>
                <span className="block pt-0.5">(1 + <span className="italic">R</span>)<sup><span className="italic">P</span></sup> - 1</span>
              </span>
            </div>
          </div>

          <div className="space-y-2 text-sm sm:text-base text-gray-700">
            <p className="font-semibold text-gray-900">Որտեղ՝</p>
            <ul className="space-y-1.5 pl-5">
              <li><span className="font-bold text-[#6200EE]">K</span> – ամսական վճար,</li>
              <li><span className="font-bold text-[#6200EE]">A</span> – վարկի սկզբնական գումար,</li>
              <li><span className="font-bold text-[#6200EE]">R</span> – տոկոսագումար, հաշվում է ամսական տոկոսադրույքը, օրինակ՝ (18/12) / 100 = 0.015,</li>
              <li><span className="font-bold text-[#6200EE]">P</span> – վարկի մարման ժամկետ (ամիսներով):</li>
            </ul>
          </div>

          <div className="space-y-3 pt-2">
            <p className="font-semibold text-gray-900 text-sm sm:text-base">
              Յուրաքանչյուր ամիս վարկի մարման գծով ամսական վճարը կկազմի՝
            </p>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex justify-center items-center overflow-x-auto text-[#1c1c1c]">
              <div className="text-base sm:text-lg font-serif">
                700,000 &times; 
                <span className="inline-block mx-2 text-center align-middle">
                  <span className="block border-b border-gray-800 pb-0.5">(1 + 0.015)<sup>12</sup> &times; 0.015</span>
                  <span className="block pt-0.5">(1 + 0.015)<sup>12</sup> - 1</span>
                </span>
                = 64,176
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Տարեկան փաստացի տոկոսադրույքը հաշվարկելու համար որպես K1 լրացվում է Վարկային հայտի ուսումնասիրման միանվագ վճարը՝ 1,000 ՀՀ դրամ։<br />
            Այսպիսով՝ վարկի տարեկան փաստացի տոկոսադրույքը կհաշվարկվի հետևյալ կերպ․
          </p>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex justify-center items-center overflow-x-auto text-[#1c1c1c]">
            <div className="text-sm sm:text-base font-serif flex items-center flex-wrap gap-2 justify-center">
              <span>700,000 =</span>
              <span className="inline-block text-center align-middle">
                <span className="block border-b border-gray-800 pb-0.5">1,000</span>
                <span className="block pt-0.5">(1 + <span className="italic">i</span>)<sup>0 / 365</sup></span>
              </span>
              <span>+</span>
              <span className="inline-block text-center align-middle">
                <span className="block border-b border-gray-800 pb-0.5">64,176</span>
                <span className="block pt-0.5">(1 + <span className="italic">i</span>)<sup>30 / 365</sup></span>
              </span>
              <span>+</span>
              <span className="inline-block text-center align-middle">
                <span className="block border-b border-gray-800 pb-0.5">64,176</span>
                <span className="block pt-0.5">(1 + <span className="italic">i</span>)<sup>61 / 365</sup></span>
              </span>
              <span>+ ... +</span>
              <span className="inline-block text-center align-middle">
                <span className="block border-b border-gray-800 pb-0.5">64,176</span>
                <span className="block pt-0.5">(1 + <span className="italic">i</span>)<sup>365 / 365</sup></span>
              </span>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 text-[#6200EE] font-bold text-center text-sm sm:text-base">
            i = 0.1995 &times; 100 = 19.95 %
          </div>

          <p className="text-sm sm:text-base text-gray-800 font-medium">
            Բանկի կողմից առաջարկվող վերոհիշյալ պայմաններով վարկի տարեկան փաստացի տոկոսադրույքը կկազմի <span className="font-bold text-[#6200EE]">19.95 %</span>:
          </p>
        </section>

        <section className="pt-8 border-t border-gray-100 space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
            Վարկի տարեկան փաստացի տոկոսադրույքի հաշվարկում չներառվող վճարներ
          </h3>
          <ul className="list-disc pl-8 space-y-2 text-sm sm:text-base text-gray-700">
            <li>Նոտարական ձևակերպման վճարներ,</li>
            <li>Գրավի գրանցման վճարներ,</li>
            <li>Կանխիկացման վճարներ:</li>
          </ul>
        </section>

        <section className="pt-8 border-t border-gray-100 space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
            Լողացող տոկոսադրույքի հաշվարկման կարգ
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Լողացող տոկոսադրույքի կիրառման դեպքում անվանական տոկոսադրույքի հաշվարկն իրականացվում է հետևյալ բանաձևով՝ <span className="font-serif italic font-bold">S<sub>t</sub> = S<sub>c</sub> + S<sub>ϕ</sub></span>, որտեղ՝
          </p>
          <ul className="space-y-2 text-sm sm:text-base text-gray-700 pl-5">
            <li><span className="font-bold text-[#6200EE]">S<sub>t</sub></span> – Լողացող տոկոսադրույք,</li>
            <li><span className="font-bold text-[#6200EE]">S<sub>c</sub></span> – Լողացող տոկոսադրույքի հաստատուն բաղադրիչ,</li>
            <li><span className="font-bold text-[#6200EE]">S<sub>ϕ</sub></span> – Լողացող տոկոսադրույքի փոփոխուն բաղադրիչ:</li>
          </ul>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Լողացող տոկոսադրույքի կիրառման դեպքում յուրաքանչյուր վարկի համար վարկային պայմանագրերում սահմանվում են անվանական տոկոսադրույքի առավելագույն և նվազագույն շեմեր, որոնցից ավելի տոկոսադրույքը չի կարող բարձրանալ կամ իջնել՝ անկախ հաշվարկման հիմքում ընկած ցուցանիշների փոփոխության չափից: Ընդ որում, բարձրացման առավելագույն շեմը չի կարող գերազանցել իջեցման առավելագույն շեմը:
          </p>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Բանկը տարին երկու անգամ փոփոխում է լողացող տոկոսադրույքի փոփոխուն բաղադրիչը (ՖԾ) և այդ մասին տեղեկատվությունը ոչ ուշ, քան յուրաքանչյուր տարվա փետրվարի 1-ը և օգոստոսի 1-ը հրապարակում է Բանկի պաշտոնական ինտերնետային կայքում:
          </p>

          <div className="space-y-4">
            <h4 className="font-bold text-gray-800 text-base">Լողացող տոկոսադրույքի փոփոխուն բաղադրիչը (ՖԾ) կախված վարկի արժույթից, որոշվում է հետևյալ շուկայական տոկոսադրույքների միջոցով՝</h4>
            
            <div className="space-y-2">
              <p className="font-semibold text-gray-800">● ՀՀ դրամով հիմնական՝</p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Փոփոխուն բաղադրիչի հաշվարկման հիմք է հանդիսանում 6 ամիս ժամկետայնությամբ ՀՀ պետական գանձապետական պարտատոմսերի մինչև մարումը եկամտաբերությունը: ՀՀ պետական գանձապետական պարտատոմսերի մինչև մարումը եկամտաբերությունների վերաբերյալ տեղեկատվության աղբյուր կարող են հանդիսանալ ՀՀՔ պաշտոնական կայքի համապատասխան հրապարակումները հետևյալ հղումով՝{' '}
                <a href="https://www.cba.am/am/SitePages/fmolfinancialmarkets.aspx" target="_blank" rel="noopener noreferrer" className="text-[#6200EE] font-medium hover:underline break-all">
                  https://www.cba.am/am/SitePages/fmolfinancialmarkets.aspx
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-gray-800">● ՀՀ դրամով երկրորդային՝</p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Փոփոխուն բաղադրիչի հաշվարկման հիմք է հանդիսանում ՀՀ ԿԲ կողմից հրապարակված ֆիզիկական անձանցից մինչև 1 տարի ժամկետով (բացառությամբ ցանկացած պահանջի ավանդների) ներգրավված ՀՀ դրամով ավանդների տոկոսադրույքները: Ֆիզիկական անձանցից մինչև 1 տարի ժամկետով (բացառությամբ ցանկացած պահանջի ավանդների) ներգրավված ՀՀ դրամով ավանդների տոկոսադրույքների վերաբերյալ տեղեկատվության աղբյուր կարող են հանդիսանալ ՀՀՔ պաշտոնական կայքի համապատասխան հրապարակումները հետևյալ հղումով՝{' '}
                <a href="https://www.cba.am/am/SitePages/statmonetaryfinancial.aspx" target="_blank" rel="noopener noreferrer" className="text-[#6200EE] font-medium hover:underline break-all">
                  https://www.cba.am/am/SitePages/statmonetaryfinancial.aspx
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="pt-8 border-t border-gray-100 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Կարևոր տեղեկատվություն վարկային պատմության վերաբերյալ
            </h2>
            <p className="text-sm sm:text-base text-gray-700 font-semibold">
              Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի ձեր <span className="font-bold uppercase">ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ</span> վրա:
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-[#6200EE] text-lg">●</span>
              <h4 className="text-lg font-bold">Ինչ է վարկային պատմությունը</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5">
              «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի համաձայն՝ վարկային տեղեկատվությունը վարկային տեղեկատվության սուբյեկտի կողմից ստանձնած պարտավորությունների վերաբերյալ տեղեկատվությունն է, որը ցույց է տալիս վարկային տեղեկատվության սուբյեկտի պարտքերը, վճարումները, վճարումների սովորությունները կամ պարտավորությունների կամ դրանց կատարման վերաբերյալ տեղեկատվություններ։
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-[#6200EE] text-lg">●</span>
              <h4 className="text-lg font-bold">Որոնք են վարկային պատմության ձևավորման աղբյուրները</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5">
              Վարկային պատմության ձևավորման աղբյուրներն են ԱՔՌԱ գործընկերները (բանկերը, վարկային կազմակերպությունները, ապահովագրական ընկերությունները, հետաձգված վճարումներով գործարքներ իրականացնող կազմակերպությունները, ինչպես նաև՝ հանրային տվյալների բազաներից ՀՀ կառավարության սահմանված կարգով վարկային բյուրոյին անձանց վերաբերյալ տեղեկություններ տրամադրող պետական մարմինները, որոնք տրամադրում են վարկային տեղեկատվության սուբյեկտի վերաբերյալ տեղեկություններ/տվյալներ)։
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-[#6200EE] text-lg">●</span>
              <h4 className="text-lg font-bold">Ինչ է վարկային բյուրոն</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5">
              Վարկային բյուրոն իրականացնում է իրավաբանական և ֆիզիկական անձանց ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկատվության (վարկային տեղեկատվության) հավաքագրում, մշակում, պահպանում, տրամադրում, ինչպես նաև դրանց հիման վրա վարկային զեկույցի պատրաստման գործունեություն։
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-[#6200EE] text-lg">●</span>
              <h4 className="text-lg font-bold">Ինչ է վարկային զեկույցը</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5">
              Վարկային զեկույցը գրավոր կամ էլեկտրոնային փաստաթուղթ է, որը պարունակում է վարկային տեղեկատվության սուբյեկտի (ֆիզիկական կամ իրավաբանական) և նրա կողմից ստանձնած ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկատվություն։
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-[#6200EE] text-lg">●</span>
              <h4 className="text-lg font-bold">Որքան ժամանակ է պահպանվում վարկային պատմությունը</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5">
              Համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի 11-րդ հոդվածի դրույթների, «վարկային բյուրոյի կողմից տրամադրվող վարկային զեկույցներում չպետք է ներառվի վարկային զեկույցի տրամադրման պահին նախորդող հինգ տարուց ավելի վաղեմության տեղեկատվություն»։
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-[#6200EE] text-lg">●</span>
              <h4 className="text-lg font-bold">Ինչպես բարելավել վարկային պատմությունը</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5">
              Նախ անհրաժեշտ է լիովին մարել նախկինում գոյացած ժամկետանց պարտավորությունների վճարումները: Բացի այդ, ներկա պահին գործող վարկերի մասով անհրաժեշտ է բացառել ժամկետանց՝ նույնիսկ մեկ օրվա կտրվածքով պարտավորությունների գոյացումը։
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-[#6200EE] text-lg">●</span>
              <h4 className="text-lg font-bold">Ուր դիմել եթե վարկային պատմությունը սխալ է</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5">
              Եթե վարկառուի վարկային պատմության մեջ առկա են սխալ կամ թերի տվյալներ, ապա պարզաբանման և ուղղման նպատակով վարկառուն կարող է դիմել վարկային բյուրոյին կամ ուղղակիորեն դիմել տեղեկատվություն տրամադրող սուբյեկտներին։
            </p>
          </div>
        </section>

        <section className="pt-8 border-t border-gray-100 space-y-6">
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

        <section className="pt-8 border-t border-gray-100 space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
            Պետական տուրքեր և այլ ծախսեր
          </h3>
          <p className="text-sm sm:text-base font-semibold text-gray-700">
            Գրավադրման պայմանով վարկերի դեպքում առկա են հետևյալ վճարները․
          </p>

          <ul className="list-disc pl-10 space-y-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            <li>
              <span className="font-bold text-gray-800">Գրավադրվող գույքի գնահատում՝</span> 10,000-150,000 դրամ՝ կախված գույքի տեսակից, մակերեսից և գնահատող կազմակերպության սակագներից:
            </li>
            <li>
              <span className="font-bold text-gray-800">Նոտարական ձևակերպման ծախսեր՝</span> 10,000-50,000 դրամ:
            </li>
            <li>
              <span className="font-bold text-gray-800">Գրավի գրանցման ծախսեր՝</span> անշարժ գույքի գրավի գրանցման դեպքում՝ սկսած 26,400 ՀՀ դրամից։{' '}
              <a href="https://www.cadastre.am" target="_blank" rel="noopener noreferrer" className="text-[#6200EE] font-medium hover:underline">
                www.cadastre.am
              </a>
            </li>
            <li>
              <span className="font-bold text-gray-800">Գրավադրվող գույքի ապահովագրում՝</span> վարկի մնացորդի 0.15 % – 2.5 %-ի չափով:
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}