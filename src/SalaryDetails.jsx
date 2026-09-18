import React from 'react';

export default function SalaryDetails() {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-8 max-w-7xl mx-auto text-gray-800 space-y-10">
      
      {/* Ներածական տեքստ */}
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
        Evoca աշխատավարձային նախագիծը մեկնարկել է նրանց համար, ովքեր, իրենց աշխատավարձը քարտին ստանալուց բացի, ցանկանում են նաև ստանալ նոր հնարավորություններ ու առավելություններ։
      </p>

      {/* 1. Mastercard Gold */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-[#6200EE]">
          Բեր աշխատավարձդ Evoca, տար անվճար Mastercard Gold
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 pl-2">
          <li>Պրեմիում դասի քարտ</li>
          <li>Հասանելի ամբողջ աշխարհում</li>
          <li>Գումարի անվտանգության բարձր մակարդակ</li>
          <li>Դրական մնացորդի նկատմամբ 2% տարեկան տոկոսադրույք</li>
        </ul>
      </div>

      {/* 2. Evoca Travel Card */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-[#6200EE]">
          Բեր աշխատավարձդ Evoca, տար 50% զեղչով Evoca Travel Card
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 pl-2">
          <li>Մինչև 1.5% cashback արտասահմանում իրականացված վճարումների համար</li>
          <li>Անվճար 6 մուտք Lounge Key սրահներ քեզ և հյուրերիդ համար</li>
          <li>Անվճար 6 անգամ Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար</li>
          <li>Այլ ճամփորդական առավելություններ</li>
        </ul>
      </div>

      {/* 3. Benefits-ներ */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-[#6200EE]">
          Բեր աշխատավարձդ Evoca, տար մի շարք Benefits-ներ
        </h3>
        <p className="text-gray-600">
          Դառնալով Evoca քարտապան՝ կունենաս հնարավորություն օգտվելու <span className="font-semibold text-gray-900">Evoca Benefits</span> նախագծից և մեր 100-ից ավել գործընկերների մոտ կստանաս՝
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 pl-2">
          <li>Մինչև 25% զեղչ</li>
          <li>Մինչև 25% cashback</li>
          <li>Նվեր քարտեր</li>
        </ul>
      </div>

      {/* 4. Վարկեր */}
      <div className="space-y-6 pt-4 border-t border-gray-100">
        <h3 className="text-lg sm:text-xl font-bold text-[#6200EE]">
          Բեր աշխատավարձդ Evoca, տար ավելի ցածր տոկոսադրույքով վարկեր
        </h3>

        {/* Օվերդրաֆտ */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-900 text-base">Օվերդրաֆտ կամ մարման գրաֆիկով վարկ</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600 pl-2">
            <li>Մինչև աշխատավարձի 15-ապատիկի չափով</li>
            <li>Մինչև 10 մլն դրամ գումար</li>
            <li>Մինչև 60 ամիս մարման ժամկետ</li>
          </ul>
        </div>

        {/* Ավտովարկ */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-900 text-base">Ավտովարկ</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600 pl-2">
            <li>0.5-ով ցածր տոկոսադրույք</li>
            <li>Մինչև 50 մլն դրամ գումար</li>
            <li>Մինչև 84 ամիս մարման ժամկետ</li>
            <li>Նախընտրած մեքենայի ձեռքբերում՝ ինչպես առաջնային, այնպես էլ երկրորդային շուկայից</li>
          </ul>
        </div>

        {/* Անշարժ գույքի գրավով */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-900 text-base">Անշարժ գույքի գրավով սպառողական վարկ</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600 pl-2">
            <li>0.5-ով ցածր տոկոսադրույք</li>
            <li>Մինչև 100 մլն դրամ գումար</li>
            <li>Մինչև 120 ամիս մարման ժամկետ</li>
          </ul>
        </div>

      </div>

    </div>
  );
}