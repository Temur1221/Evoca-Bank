import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import EvocaBanner from "../EvocaBanner";
import FloatingChatWidget from '../FloatingChatWidget'

export default function PensionCards() {
  return (
    <>
      <Header />
      
      <div className="max-w-[1280px] mx-auto px-4 py-12 font-sans bg-white min-h-[60vh]">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 shadow-sm rounded-2xl overflow-hidden border border-gray-100 mb-12">
          <div className="bg-[#F8F9FA] p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Սոցիալական ապահովության վճարային քարտեր
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Կենսաթոշակառուներին առաջարկում ենք ARCA կենսաթոշակային վճարային քարտեր՝ միայն կենսաթոշակների գումարների սպասարկման նպատակով: Քարտերը տրամադրում ենք Սոցիալական ապահովության պետական ծառայության հետ 2011թ. հունվարի 21-ին կնքված պայմանագրի համաձայն:
            </p>
          </div>

          <div className="bg-[#B89CFC] flex items-end justify-center overflow-hidden">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17218011250749/780x585.jpg" 
              alt="Սոցիալական ապահովության վճարային քարտեր" 
              className="w-full h-full object-cover max-h-[450px]"
            />
          </div>
        </div>
        <div className="space-y-6 text-gray-700 text-base leading-relaxed mb-12">
          <p>
            Քարտերը տրամադրում և սպասարկում ենք մեր կողմից հաստատված Կենսաթոշակային քարտերի տրամադրման և սպասարկման սակագների համաձայն:
          </p>
          <p>
            Քարտերի ստացման դիմում կարող եք ներկայացնել մեր Գլխամասային գրասենյակ կամ ցանկացած մասնաճյուղ:
          </p>
          <p>
            Վճարային քարտերի տրամադրմանը, սպասարկմանը և օգտագործմանը վերաբերող մանրամասն տեղեկատվությանը կարող եք ծանոթանալ <a href="#" className="text-purple-700 underline font-medium">այստեղ</a>:
          </p>
          <p className="text-sm text-gray-500 italic bg-gray-50 p-4 rounded-lg border border-gray-100">
            <strong>Ծանոթագրություն</strong> - «Կենսաթոշակառու»՝ անձ, ում կենսաթոշակը վճարվում է անկանխիկ եղանակով։ Բանկում բացված բանկային հաշվին փոխանցվող միջոցները՝ կենսաթոշակի, պատվովճարի, դրամական օգնության և սոցիալական ապահովության այլ ծրագրերով նախատեսված դրամական վճարների գումարն են:
          </p>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Վճարային քարտերով կատարվող գործառնություններ</h2>
          <p className="text-gray-700 font-medium mb-4">Վճարային քարտերով կարող եք՝</p>
          <ul className="list-disc pl-5 space-y-3 text-gray-700">
            <li>Կանխիկացնել ձեր քարտային հաշվին առկա միջոցները բանկոմատներից և կանխիկացման կետերից (POS տերմինալներից)։</li>
            <li>Կատարել անկանխիկ վճարումներ առևտրի և սպասարկման կետերում՝ խանութներում, սուպերմարկետներում, ռեստորաններում, հյուրանոցներում և սպասարկման այլ կետերում։</li>
            <li>Կատարել կոմունալ վճարումներ բանկոմատների միջոցով կամ օգտվել <a href="https://www.arca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline">www.arca.am</a>-ում գրանցվելով վեբնախա քարտին։</li>
            <li>Օնլայն գործարքներ կատարել՝ վճարումներ, գնումներ։</li>
            <li>Քարտից քարտ գումար փոխանցել՝ բանկոմատների միջոցով կամ օնլայն։</li>
            <li>Մեր օնլայն բանկինգ ծառայությունից օգտվելու պարագայում դուք հնարավորություն կունենաք առանց մեզ այցելելու կատարել դրամական միջոցների համալրում (ընթացիկ հաշվից՝ քարտային հաշիվ) և անմիջապես տնօրինել այդ գումարները ձեր քարտի միջոցով։</li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            <u>Նշում․</u> Քարտային հաշվով կատարվող դրամական շարժը վերահսկելու նպատակով ակտիվացնում ենք SMS-տեղեկացման ծառայությունը (որը կարող եք ոչ հիմքում գրել և հրաժարվել SMS տեղեկացումների ծառայությունից)։ Օնլայն վճարումներ իրականացնելիս կարող եք օգտվել 3D Secure ծառայությունից։
          </p>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Օգտակար տեղեկատվություն</h2>
          <p className="text-gray-700 font-medium mb-4">Քարտային վճարումներ կատարելիս անհրաժեշտ է հիշել՝</p>
          <ul className="list-disc pl-5 space-y-3 text-gray-700">
            <li>Քարտով կարող եք վճարումներ կատարել այն առևտրի ու սպասարկման կետերում, որտեղ փակցված է տվյալ քարտային համակարգի լոգոտիպը։</li>
            <li>Քարտով վճարում կատարելիս՝ մինչև անդորրագիրը ստորագրելը, հավաստիացեք, որ անդորրագրում նշված գումարը համապատասխանում է ձեր գործարքի գումարին։</li>
            <li>Քարտով վճարելիս միշտ պահեք քարտը ձեր տեսադաշտում։</li>
          </ul>
        </div>
        <div className="mb-12 bg-purple-50 p-6 rounded-2xl border border-purple-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Զգուշացում</h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-700">
            <li>Ապահովեք ձեր PIN ծածկագրի գաղտնիությունը։ Այն պետք է պահպանել գաղտնի և հասանելի չդարձնել այլ անձանց։ PIN ծածկագրի կատարված բոլոր գործարքների պատասխանատվությունը կրում եք դուք։ Մենք պատասխանատվություն չենք կրում ձեր PIN ծածկագիրը երրորդ անձանց հասանելի դառնալու հետևանքով վճարային քարտի ոչ օրինական և ձեր կողմից չօգտագործված համար։</li>
            <li>Քարտի կորստի կամ գողության դեպքում անհապաղ զանգահարեք մեզ (+374 10) 605555 հեռախոսահամարով կամ «Արմենիան Քարդ» վճարահաշվարկային համակարգ (+374 10) 592222 հեռախոսահամարով՝ հայտնելով քարտի ստացման դիմումի մեջ ձեր կողմից նշված գաղտնաբառը։ Զանգից անմիջապես հետո քարտի գործողությունը կդադարեցվի։</li>
            <li>Մենք պատասխանատվություն չենք կրում մեզ հասցրած այն վնասի համար, որը կատարվել է քարտը կորցնելու և մեզ հայտնելու միջև ընկած ժամանակահատվածում։</li>
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Փաստաթղթեր</h2>
          <div className="space-y-3">
            <a 
              href="https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-100"
            >
              <span className="mr-3 text-purple-700">📄</span>
              <span className="text-gray-700 font-medium">Համաթիվ բանկային ծառայությունների մատուցման պայմաններ 16.05.2025</span>
            </a>
            <a 
              href="https://www.evoca.am/files/global_files/1/credit-and-debit-cards-17-03-26.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-100"
            >
              <span className="mr-3 text-purple-700">📄</span>
              <span className="text-gray-700 font-medium">Դեբետային և կրեդիտային քարտեր (Տեղեկատվական ամփոփագիր) 17.03.2026</span>
            </a>
          </div>
        </div>

      </div>
      <EvocaBanner/>
      <FloatingChatWidget/>
      <Footer />
    </>
  );
}