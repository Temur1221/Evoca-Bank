import React from 'react';

export default function DepositTermsSection() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8 text-gray-800">
      
      {/* Գլխավոր վերնագիր */}
      <h2 className="text-2xl font-extrabold text-gray-900 tracking-wide uppercase">
        Անհրաժեշտ տեղեկատվություն
      </h2>

      {/* ԲԱԺԻՆ 1: Ընդհանուր տեղեկատվություն */}
      <div className="bg-white border border-purple-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-[#6200EE]">
          Ընդհանուր տեղեկատվություն
        </h3>
        
        <ul className="space-y-3 text-sm leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>
              Ժամկետային ավանդներն ընդունում ենք ֆիզիկական (այդ թվում՝ անհատ ձեռնարկատերեր) և իրավաբանական անձ հաճախորդներից (ռեզիդենտ և ոչ ռեզիդենտ)՝
            </span>
          </li>
          
          <div className="pl-6 space-y-1 text-gray-600">
            <p>• դրամով, դոլարով, եվրոյով և ռուբլով</p>
            <p>• կանխիկ և անկանխիկ տարբերակով</p>
          </div>

          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>Ավանդներն ընդունում ենք մեր կողմից հաստատված պայմաններով և տոկոսադրույքներով:</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>
              Ավանդների ընդունման և վերադարձման գործընթացում ղեկավարվում ենք Օրենսդրությամբ, Կենտրոնական բանկի որոշումներով և այլ իրավական ակտերով:
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>
              Օրենսդրական ակտերի համաձայն, ապահովվում ենք ավանդի ներդրման և դրա հետ կապված այլ գործողությունների գաղտնիությունը: Ավանդի վերաբերյալ տեղեկատվության տրամադրումը երրորդ անձանց կատարվում է բացառապես «Բանկային գաղտնիքի մասին» օրենքով սահմանված դեպքերում և ընթացակարգով:
            </span>
          </li>
        </ul>

        {/* Ուշադրություն բլոկ */}
        <div className="bg-purple-50/60 border-l-4 border-[#6200EE] p-4 rounded-r-xl mt-4 text-xs md:text-sm text-gray-700 leading-relaxed">
          <p className="font-bold text-[#6200EE] mb-1">Ուշադրություն</p>
          Մեր կողմից պարբերաբար անցկացվող ավանդային ակցիաների պայմանները տարբերվում են մեր համակարգում ավանդների ներդրման ընդհանուր պայմաններից և գործում են միայն պաշտոնապես հրապարակված ակցիայի շրջանակում ներդրված ավանդների նկատմամբ:
        </div>
      </div>


      {/* ԲԱԺԻՆ 2: Ավանդի տոկոսագումարների հաշվարկման և վճարման կարգ */}
      <div className="bg-white border border-purple-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-[#6200EE]">
          Ավանդի տոկոսագումարների հաշվարկման և վճարման կարգ
        </h3>
        
        <ul className="space-y-3 text-sm leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>
              Տոկոսագումարները հաշվում ենք ավանդի փաստացի մնացորդի նկատմամբ՝ օրական կտրվածքով պարզ եղանակով, ավանդային պայմանագրի ամբողջ ժամկետի համար։ Ավանդի յուրաքանչյուր օրվա տոկոսադրույքը հաշվում ենք սահմանված տոկոսադրույքի 1/365, իսկ նահանջ տարվա համար՝ 1/366 հարաբերակցությամբ։
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>
              Տոկոսագումարները հաշվում ենք ավանդը բանկ մուտք լինելու օրվանից մինչև այն վերադարձնելու կամ ավանդային հաշվից դուրս գրելու օրվան նախորդող օրն ընկած ժամանակահատվածի օրացուցային օրերի համար։
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>
              Ավանդների դիմաց հաշվեգրվող տոկոսագումարները վճարում ենք կանխիկ և անկանխիկ եղանակով: Ավանդատուի ցանկությամբ տոկոսագումարները կարող են վճարվել այլ արտարժույթով, որով ներդրված է ավանդը, ինչպես նաև ՀՀ դրամով՝ հիմք ընդունելով վճարման օրը տվյալ արտարժույթի համար մեր կողմից սահմանված անկանխիկ առքի փոխարժեքը։
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>Ձեր ընտրությամբ տոկոսագումարները վճարում ենք հետևյալ տարբերակներով՝</span>
          </li>
          
          <div className="pl-6 space-y-2 text-gray-600">
            <p>• Տոկոսագումարների պարբերաբար վճարում, որի դեպքում ավանդի դիմաց հաշվեգրված տոկոսագումարները վճարում ենք երկկողմանի համաձայնեցված ժամանակացույցով կամ՝</p>
            <p>• Տոկոսագումարների վճարում՝ պայմանագրի ժամկետի վերջում, որի դեպքում ավանդի դիմաց հաշվեգրված տոկոսագումարները վճարում ենք պայմանագրի գործողության ավարտին՝ ավանդի գումարի հետ միասին։</p>
          </div>
        </ul>

        {/* Ուշադրություն բլոկ */}
        <div className="bg-purple-50/60 border-l-4 border-[#6200EE] p-4 rounded-r-xl mt-4 text-xs md:text-sm text-gray-700 leading-relaxed">
          <p className="font-bold text-[#6200EE] mb-1">Ուշադրություն</p>
          Ձեր հաշվին առկա միջոցների նկատմամբ տոկոսագումարները հաշվում ենք ԱՆՎԱՆԱԿԱՆ տոկոսադրույքի հիման վրա, իսկ տարեկան ՏՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆԸ ցույց է տալիս, թե որքան եկամուտ կստանաք դուք, եթե ձեր ավանդի դիմաց ստացված տոկոսագումարները վերանարդեիք ավանդի տեսքով: Տարեկան տոկոսային եկամտաբերության հաշվարկման կարգին Կանոնակարգ 8-07 կարող եք ծանոթանալ www.cba.am կայքում:
        </div>
      </div>


      {/* ԲԱԺԻՆ 3: Ավանդային հաշվի վերաբերյալ տրամադրվող տեղեկատվություն */}
      <div className="bg-white border border-purple-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-[#6200EE]">
          Ավանդային հաշվի վերաբերյալ տրամադրվող տեղեկատվություն
        </h3>
        
        <ul className="space-y-3 text-sm leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>
              Պայմանագրի գործողության ընթացքում պարտավոր ենք առնվազն 30-օրյա պարբերականությամբ ձեզ տրամադրել յուրաքանչյուր ավանդային հաշվի վերաբերյալ համապատասխան քաղվածք։
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>
              Քաղվածքները ձեզ տրամադրում ենք գրավոր՝ փոստային կապի միջոցով, բացառությամբ այն դեպքի, երբ դուք գրավոր, այդ թվում՝ էլեկտրոնային ռեժիմի հիման վրա հրաժարվել եք քաղվածքները փոստային կապի միջոցով ստանալու իրավունքից՝ դրանք էլեկտրոնային կամ կապի այլ միջոցներով կամ մեր տարածքում առձեռն ստանալու պայմանով։ Հաշվի քաղվածքների տրամադրման եղանակն ամրագրվում է Ավանդային պայմանագրով։
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>
              Ավանդային հաշվի վերաբերյալ քաղվածքների կրկնօրինակների կամ այլ տեղեկատվության տրամադրման դիմաց մեզնից գանձվում է միջնորդավճար՝ ըստ մեր սակագների, որոնք ներկայացված են «Ընթացիկ հաշիվներ» բաժնում։
            </span>
          </li>
        </ul>
      </div>


      {/* ԲԱԺԻՆ 4: Երաշխավորված ավանդների սահմանաչափերը */}
      <div className="bg-white border border-purple-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-[#6200EE]">
          Երաշխավորված ավանդների սահմանաչափերը
        </h3>
        
        <p className="text-sm text-gray-700 leading-relaxed">
          Համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի՝ բանկում բացված հաշվարկային, ընթացիկ, ժամկետային, խնայողական կամ այլ հաշվի վրա գտնվող դրամական միջոցները համարվում են բանկային ավանդ։ ՀՀ օրենքով երաշխավորված ավանդները հատուցում է Ավանդների հատուցումը երաշխավորող հիմնադրամը։ Եթե դուք անվճարունակ բանկում ունեք՝
        </p>

        <ul className="space-y-3 text-sm leading-relaxed pt-2">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>Միայն դրամային ավանդ, ապա երաշխավորված ավանդի չափը 16 միլիոն դրամ է:</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>Միայն արտարժութային ավանդ, ապա երաշխավորված ավանդի չափը 7 միլիոն դրամ է:</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>Դրամային և արտարժութային ավանդներ, և դրամային ավանդը 7 միլիոն դրամից ավելի է, ապա երաշխավորվում է միայն դրամային ավանդը՝ մինչև 16 միլիոն դրամով:</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>Դրամային և արտարժութային բանկային ավանդներ, և ձեր դրամային ավանդի գումարը պակաս է 7 միլիոն դրամից, ապա երաշխավորվում է դրամային ավանդն ամբողջությամբ և արտարժութային ավանդը՝ 7 միլիոն դրամի և հատուցված դրամային բանկային ավանդի տարբերության չափով:</span>
          </li>
        </ul>

        {/* Ծանոթագրություն բլոկ */}
        <div className="bg-purple-50/60 border-l-4 border-[#6200EE] p-4 rounded-r-xl mt-4 text-xs md:text-sm text-gray-700 leading-relaxed">
          <p className="font-bold text-[#6200EE] mb-1">Ծանոթագրություն</p>
          Նույն բանկում ունեցած ձեր բոլոր դրամային ավանդները համարվում են մեկ ավանդ, և բոլոր արտարժութային ավանդները՝ մեկ ավանդ։ Եթե ունեք ավանդներ ՀՀ տարածքում գործող մի քանի բանկերում, ապա դրանք երաշխավորվում են յուրաքանչյուր բանկում՝ առավելագույն սահմանաչափով։
        </div>
      </div>


      {/* ԲԱԺԻՆ 5: Այլ պայմաններ */}
      <div className="bg-white border border-purple-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-[#6200EE]">
          Այլ պայմաններ
        </h3>
        
        <ul className="space-y-3 text-sm leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>
              Եթե պայմանագրի ժամկետի ավարտից հետո չեք պահանջում վճարել ժամկետային ավանդի գումարը կամ պայմանագրով նախատեսված հանգամանքները երևան գալուց հետո վերադարձնել այլ պայմաններով ներդրված ավանդի գումարը, ապա ավանդային պայմանագիրը համարվում է երկարաձգված պահանջի ավանդի պայմաններով, եթե այլ բան նախատեսված չէ պայմանագրով։
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>
              Մենք չենք կարող միակողմանի նվազեցնել պայմանագրով որոշված ավանդի տոկոսագումարների չափը, որը դուք ներդրել եք որոշակի ժամկետի ավարտից կամ պայմանագրով նախատեսված հանգամանքներից հետո հանկարծ այն ստանալու պայմանով, եթե այլ բան նախատեսված չէ օրենքով։
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>
              Օրենսդրությամբ սահմանված կարգով դուք իրավունք ունեք ավանդ ներդնել երրորդ անձանց անունով։
            </span>
          </li>
        </ul>
      </div>
        <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-white border border-purple-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-4 text-gray-800">
        <h3 className="text-lg font-bold text-[#6200EE]">
          Երաշխավորված ավանդների սահմանաչափերը
        </h3>
        
        <p className="text-sm text-gray-700 leading-relaxed">
          Համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի՝ բանկում բացված հաշվարկային, ընթացիկ, ժամկետային, խնայողական կամ այլ հաշվի վրա գտնվող դրամական միջոցները համարվում են բանկային ավանդ։ ՀՀ օրենքով երաշխավորված ավանդները հատուցում է Ավանդների հատուցումը երաշխավորող հիմնադրամը։ Եթե դուք անվճարունակ բանկում ունեք՝
        </p>

        <ul className="space-y-3 text-sm leading-relaxed pt-2">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>Միայն դրամային ավանդ, ապա երաշխավորված ավանդի չափը 16 միլիոն դրամ է:</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>Միայն արտարժութային ավանդ, ապա երաշխավորված ավանդի չափը 7 միլիոն դրամ է:</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>Դրամային և արտարժութային ավանդներ, և դրամային ավանդը 7 միլիոն դրամից ավելի է, ապա երաշխավորվում է միայն դրամային ավանդը՝ մինչև 16 միլիոն դրամով:</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6200EE] mt-2 flex-shrink-0"></span>
            <span>Դրամային և արտարժութային բանկային ավանդներ, և ձեր դրամային ավանդի գումարը պակաս է 7 միլիոն դրամից, ապա երաշխավորվում է դրամային ավանդն ամբողջությամբ և արտարժութային ավանդը՝ 7 միլիոն դրամի և հատուցված դրամային բանկային ավանդի տարբերության չափով:</span>
          </li>
        </ul>

        {/* Ծանոթագրություն բլոկ */}
        <div className="bg-purple-50/60 border-l-4 border-[#6200EE] p-4 rounded-r-xl mt-4 text-xs md:text-sm text-gray-700 leading-relaxed">
          <p className="font-bold text-[#6200EE] mb-1">Ծանոթագրություն</p>
          Նույն բանկում ունեցած ձեր բոլոր դրամային ավանդները համարվում են մեկ ավանդ, և բոլոր արտարժութային ավանդները՝ մեկ ավանդ։ Եթե ունեք ավանդներ ՀՀ տարածքում գործող մի քանի բանկերում, ապա դրանք երաշխավորվում են յուրաքանչյուր բանկում՝ առավելագույն սահմանաչափով։
        </div>
      </div>
    </div>
    </div>

  );
}