import React from 'react';
import { Link } from 'react-router-dom';

export default function BusinessTradeGuarantee() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-10 text-gray-800">
      
      {/* Գլխավոր ներածություն */}
      <div className="bg-white border-0 shadow-none p-6 sm:p-10 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          Երաշխիք
        </h2>
        
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Բանկային երաշխիքը անկախ, անվերապահ և գրավոր պարտավորություն է, որը բանկն ստանձնում է իր հաճախորդի (Applicant) հանձնարարությամբ հօգուտ երրորդ կողմի (Beneficiary) վճարելու երաշխիքով սահմանված գումարը ներկայացված պահանջի դիմաց, եթե պահանջը համապատասխանում է երաշխիքի պայմաններին:
        </p>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Բանկային երաշխիքները, որպես կանոն, կարգավորվում են <span className="text-[#6200EE] font-semibold">Միջազգային առևտրի պալատի (ICC) կողմից ընդունված URDG 758 կանոններով</span>, եթե երաշխիքում այլ բան նախատեսված չէ:
        </p>
      </div>

      {/* Բանկային երաշխիքների հիմնական տեսակները */}
      <div className="bg-white border-0 shadow-none p-6 sm:p-10 space-y-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
          Բանկային երաշխիքների հիմնական տեսակները
        </h3>

        <div className="space-y-6">
          
          {/* 1. Կանխավճարային երաշխիք */}
          <div className="space-y-2">
            <h4 className="text-base sm:text-lg font-bold text-[#6200EE] flex items-center space-x-2">
              <span className="w-2 h-2 bg-[#6200EE] rounded-full inline-block"></span>
              <span>Կանխավճարային երաշխիք</span>
            </h4>
            <div className="bg-white border-0 shadow-none p-4 sm:p-6 space-y-2 text-gray-600 text-sm sm:text-base">
              <p className="italic text-gray-500 font-medium">(Advance payment guarantee)</p>
              <p>Տրվում է այն դեպքում, երբ գնորդը կանխավճար է տրամադրում մատակարարին հանուն ապրանքի մատակարարման կամ կատարված ծառայության:</p>
              <p>Երաշխիքը ապահովում է կանխավճարի վերադարձը բանկին/հաճախորդին, եթե դիմորդը չի կատարում հիմնական պայմանագրով նախատեսված իր պարտավորությունները:</p>
            </div>
          </div>

          {/* 2. Պարտավորությունների կատարման երաշխիք */}
          <div className="space-y-2">
            <h4 className="text-base sm:text-lg font-bold text-[#6200EE] flex items-center space-x-2">
              <span className="w-2 h-2 bg-[#6200EE] rounded-full inline-block"></span>
              <span>Պարտավորությունների կատարման երաշխիք</span>
            </h4>
            <div className="bg-white border-0 shadow-none p-4 sm:p-6 space-y-2 text-gray-600 text-sm sm:text-base">
              <p className="italic text-gray-500 font-medium">(Performance guarantee / performance bond)</p>
              <p>Տրվում է պայմանագրով նախատեսված պարտավորությունների պատշաճ կատարումն ապահովելու նպատակով:</p>
              <p>Բանկը պարտավորվում է վճարել բանկային երաշխիքով սահմանված գումարը՝ պայմանագրային պարտավորությունների չկատարման կամ ոչ պատշաճ կատարման դեպքում:</p>
            </div>
          </div>

          {/* 3. Մրցութային երաշխիք */}
          <div className="space-y-2">
            <h4 className="text-base sm:text-lg font-bold text-[#6200EE] flex items-center space-x-2">
              <span className="w-2 h-2 bg-[#6200EE] rounded-full inline-block"></span>
              <span>Մրցութային երաշխիք</span>
            </h4>
            <div className="bg-white border-0 shadow-none p-4 sm:p-6 space-y-2 text-gray-600 text-sm sm:text-base">
              <p className="italic text-gray-500 font-medium">(Tender / bid guarantee)</p>
              <p>Տրվում է մրցույթներին կամ տենդերներին մասնակցելու, ինչպես նաև պայմանագրի որակավորման կանխավճարի ապահովման նպատակներով:</p>
            </div>
          </div>

          {/* 4. Վճարման երաշխիք */}
          <div className="space-y-2">
            <h4 className="text-base sm:text-lg font-bold text-[#6200EE] flex items-center space-x-2">
              <span className="w-2 h-2 bg-[#6200EE] rounded-full inline-block"></span>
              <span>Վճարման երաշխիք</span>
            </h4>
            <div className="bg-white border-0 shadow-none p-4 sm:p-6 space-y-2 text-gray-600 text-sm sm:text-base">
              <p className="italic text-gray-500 font-medium">(Payment guarantee)</p>
              <p>Կիրառվում է բաց հաշվով վճարման open account առևտրային գործարքներում:</p>
              <p>Երաշխիքը ապահովում է բանկայինվճարումը այն դեպքում, երբ դիմորդը չի կատարում պայմանագրով սահմանված վճարային պարտավորությունները:</p>
            </div>
          </div>

          {/* 5. Մաքսային երաշխիք */}
          <div className="space-y-2">
            <h4 className="text-base sm:text-lg font-bold text-[#6200EE] flex items-center space-x-2">
              <span className="w-2 h-2 bg-[#6200EE] rounded-full inline-block"></span>
              <span>Մաքսային երաշխիք</span>
            </h4>
            <div className="bg-white border-0 shadow-none p-4 sm:p-6 space-y-2 text-gray-600 text-sm sm:text-base">
              <p className="italic text-gray-500 font-medium">(Customs guarantee)</p>
              <p>Տրվում է մաքսային մարմինների օգտին և ապահովում է մաքսային տուրքերի, հարկերի և այլ վճարների կատարումը՝ մաքսային օրենսդրությամբ նախատեսված դեպքերում:</p>
              <p>Մաքսային երաշխիքները կարող են կարգավորվել ինչպես ազգային օրենսդրությամբ, այնպես էլ համապատասխան միջազգային կանոններով:</p>
            </div>
          </div>

          {/* 6. Պահուստային ակրեդիտիվ */}
          <div className="space-y-2">
            <h4 className="text-base sm:text-lg font-bold text-[#6200EE] flex items-center space-x-2">
              <span className="w-2 h-2 bg-[#6200EE] rounded-full inline-block"></span>
              <span>Պահուստային ակրեդիտիվ</span>
            </h4>
            <div className="bg-white border-0 shadow-none p-4 sm:p-6 space-y-2 text-gray-600 text-sm sm:text-base">
              <p className="italic text-gray-500 font-medium">(Standby letter of credit - sblc)</p>
              <p>Պահուստային ակրեդիտիվը անկախ վճարային գործիք է, որը իր տնտեսական էությամբ համարժեք է բանկային երաշխիքին:</p>
              <p>Այն սովորաբար կարգավորվում է ICC UCP 600 կանոններով և կիրառվում է այն դեպքում, երբ բանկային երաշխիքի թողարկման իրավական կամ գործառնական տեսանկյունից սահմանափակ է:</p>
              <p>SBLC-ի հիման վրա վճարումը կատարվում է միայն բանկայինդիմորդի կողմից պայմաններին համապատասխան պահանջ ներկայացնելու դեպքում:</p>
            </div>
          </div>

        </div>
      </div>

      {/* Բանկային երաշխիքների առավելությունները */}
      <div className="bg-white border-0 shadow-none p-6 sm:p-10 space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
          Բանկային երաշխիքների առավելությունները
        </h3>

        <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
          <li className="flex items-start space-x-3">
            <span className="text-[#6200EE] font-bold">✔</span>
            <span>նվազեցնում են առևտրային և ֆինանսական ռիսկերը,</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-[#6200EE] font-bold">✔</span>
            <span>ապահովում են գործարքների վստահելի իրականացումը,</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-[#6200EE] font-bold">✔</span>
            <span>հնարավորություն են տալիս կիրառել հետաձգված վճարման պայմաններ,</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-[#6200EE] font-bold">✔</span>
            <span>նպաստում են գործընկերների միջև երկարաժամկետ և վստահելի համագործակցությանը,</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-[#6200EE] font-bold">✔</span>
            <span>հանդիսանում են վարկային միջոցներին համեմատ ավելի ճկուն և ծախսարդյունավետ գործիք:</span>
          </li>
        </ul>
      </div>

    </div>
  );
}