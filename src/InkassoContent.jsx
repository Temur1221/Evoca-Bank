import React from 'react';

export default function InkassoContent() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8 text-gray-800">
      
      {/* Վերնագիր և նկարագրություն */}
      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          Ինկասո
        </h1>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Ինկասոն վճարումների ստացման և պարտքերի մարման արագ, պարզ ու արդյունավետ գործիք է։
        </p>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Այն վաճառողի հանձնարարությունն է մեզ՝ մատակարարված ապրանքների փաստաթղթերը, վճարի դիմաց, փոխանցելու գնորդին։ Ընդ որում, մենք վճարման որևէ պարտավորություն չենք ստանձնում, այլ կատարում ենք փաստաթղթերը փոխանցողի (միջնորդի) դերո։
        </p>
      </div>

      {/* Ինկասոյի վճարման հիմնական ձևերը */}
      <div className="space-y-3 pt-2">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900">
          Ինկասոյի վճարման հիմնական ձևերն են՝
        </h3>
        <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
          <li>
            <span className="font-semibold text-gray-900">Փաստաթղթեր՝ վճարման դիմաց (Documents Against Payment or D/P).</span> փաստաթղթերը տրամադրում ենք գնորդին՝ միայն նրա կողմից ապրանքների դիմաց վճարելուց հետո։
          </li>
          <li>
            <span className="font-semibold text-gray-900">Փաստաթղթեր՝ ակցեպտի դիմաց (Documents Against Acceptance or D/A).</span> փաստաթղթերը տրամադրում ենք գնորդին՝ ապրանքների դիմաց հետագայում վճարելու պայմանով (վճարումների հետաձգման պարտավորագրի (մուրհակ) ակցեպտի դեպքում)։ Ինկասոյի այս ձևը կիրառվում է, երբ գնորդն ու վաճառողը պայմանավորվածություն ունեն վճարման հետաձգման վերաբերյալ։
          </li>
        </ul>
      </div>

      {/* Սակագներ և լրացուցիչ տեղեկություն */}
      <div className="space-y-4 pt-4">
        <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
          Սակագներ
        </h3>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-2">
          Ինկասոյի գործառնությունների վերաբերյալ լրացուցիչ տեղեկություններ և խորհրդատվություն ստանալու համար կարող եք դիմել մեր Գլխամասային գրասենյակ՝ «Միջազգային և արտարժութային գործառնություններ» բաժին։
        </p>
      </div>

    </div>
  );
}