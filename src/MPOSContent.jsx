import React from 'react';

export default function MPOSContent() {
  return (
    <>
    {/* Արտաքին բլոկ, որն ապահովում է հեռավորությունը երկու կողմից և կենտրոնացումը */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      
      {/* Ներքևի լրացուցիչ տեքստային բլոկը՝ թեգերով բաժանված */}
      <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-8 lg:p-10 space-y-4">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          <strong className="text-[#5B00EB]">mPOS</strong>-ը ստանդարտ POS տերմինալի մոբայլ տարբերակն է, որը ցանկացած Android սմարթֆոն վերածում է վճարային տերմինալի:
        </p>
        
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          mPOS-ը հատկապես հարմար է շարժական բիզնեսով զբաղվողների համար՝ բացօթյա խանութներ, սրճարաններ, միջոցառումների ընթացքում սննդի վաճառքի կետեր, օնլայն խանութներ, առաքման ծառայություններ, կամ ցանկացած այլ բիզնես, որը հաճախորդից վճարումն ընդունում է բիզնեսի տարածքից դուրս:
        </p>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          mPOS-ն ակտիվացնելու համար բիզնեսին պարզապես անհրաժեշտ է NFC ընթերցող Android սմարթֆոն,որը միացված է ինտերնետին, և Evoca-ի mPOS հավելվածը: Այն կարող եք ներբեռնել Google Play-ից՝ Android 8.1 կամ ավելի թարմ ծրագրային ապահովման դեպքում:
        </p>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Հավելվածը ներբեռնելուց հետո պետք է մուտք գործել հավելված՝ Բանկի տրամադրած մուտքանունով և գաղտնաբառով: Եվ վերջ: Դուք արդեն կարող եք Ձեր հաճախորդներից ստանալ անհպում վճարումներ: Վճարում կատարելու համար հաճախորդը պարզապես մոտեցնում է Ձեր սմարթֆոնին իր քարտը կամ Apple Pay ունեցող հեռախոսը, որին կցված է Evoca վճարային քարտ:
        </p>
      </div>

    </div>
    </>
  );
}